const fs = require("fs");

//API Routing: 
module.exports = (app) => {
    // get("/api/notes") should read the "db.json" file and return all saved notes as JSON
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    app.get("/api/notes", (req, res) => {
        return res.json(noteList);
    });

    //  post('/api/notes') receives a new note to save and add it to the "db.json" file, and then return the new note
    app.post('/api/notes', (req, res) => {
        // get Id of last note if it exists
        let lastId;
        if (noteList.length) {
            lastId = Math.max(...(noteList.map(note => note.id)));
        // Or set to 0
        } else {
            lastId = 0;
        }
        //Starts id's at 1
        const id = lastId + 1;

        // pushes the id of the note with text/input of the array in the request.body
        noteList.push({ id, ...req.body });
        //Removes last index
        res.json(noteList.slice(-1));
    });
};