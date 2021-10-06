const router = require('express').Router();
const notesRoute = require('./notes.js');
const apiRoute = require('./api')

router.use('/', notesRoute);
router.use('/api', apiRoute);
module.exports = router;
