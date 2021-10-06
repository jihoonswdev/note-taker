const router = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');

router.get('/notes', (req, res) => {
    const notes = fs.readFileSync('db/db.json', 'utf8');
    const notesArr = JSON.parse(notes);
    res.json(notesArr);
    console.log(notes);
})
router.post('/notes', (req, res) => {
    const notes = fs.readFileSync('db/db.json', 'utf8');
    const notesArr = JSON.parse(notes);
    console.log(req.body);
    const noteCon = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    }
    const newNotesArr = notesArr.concat(noteCon);
    console.log(newNotesArr);

    const finalArr = fs.writeFileSync('db/db.json', JSON.stringify(newNotesArr))
    res.json(finalArr);
});
router.delete('/notes/:id', (req, res) => {
    const notes = fs.readFileSync('db/db.json', 'utf8');
    const notesArr = JSON.parse(notes);
    const newArr = notesArr.filter(note=> note.id != req.params.id);
    console.log(newArr);
    const notesRes = fs.writeFileSync('db/db.json', JSON.stringify(newArr));
    res.json(notesRes);
})
module.exports = router;