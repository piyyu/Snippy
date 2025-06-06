const { NoteModel } = require('../models/noteModel');

const createNote = async (req, res) => {
    const { title, content } = req.body;
    const userId = req.user.id;

    try {
        const note = await NoteModel.create({
            title,
            content,
            user: userId
        });

        res.status(201).json({
            msg: "Note created successfully",
        });
    } catch (err) {
        res.status(500).json({
            msg: "Error while creating note",
            error: err.message
        });
    }
};


const getUserNotes = async (req, res) => {
    const userId = req.user.id;

    try {
        const notes = await NoteModel.find({ user: userId });

        res.status(200).json({
            notes
        });
    } catch (err) {
        res.status(500).json({
            msg: "Error while fetching notes",
            error: err.message
        });
    }
};

module.exports = {
    createNote,
    getUserNotes
};
