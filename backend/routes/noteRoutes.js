const express = require('express');
const router = express.Router();
const { createNote, getUserNotes } = require('../controllers/noteController');
const {authMiddleware} = require('../middleware/auth');

router.post('/', authMiddleware, createNote);
router.get('/', authMiddleware, getUserNotes);

module.exports = router;