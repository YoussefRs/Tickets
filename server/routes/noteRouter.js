const express = require('express');
const { getNotes, addNote } = require('../controllers/noteControllers');
const { protectMe } = require('../middleware/authorization');

const router = express.Router();

router.route('/')
    .get(protectMe, getNotes)
    .post(protectMe, addNote)

module.exports = router