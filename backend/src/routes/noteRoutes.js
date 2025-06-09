const express = require('express');
const router = express.Router();
const { createNote, getUserNotes, getNoteById, updateNote } = require('../controllers/noteController');
const {authMiddleware} = require('../middleware/auth');

router.post('/', authMiddleware, createNote);
router.get('/', authMiddleware, getUserNotes);
router.get('/:id', authMiddleware, getNoteById);
router.put('/:id', authMiddleware, updateNote);

module.exports = router;