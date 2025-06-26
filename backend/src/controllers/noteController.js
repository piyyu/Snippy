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

const getNoteById = async (req, res) => {
  const userId = req.user.id;
  const noteId = req.params.id;

  try {
    const note = await NoteModel.findById(noteId);
    
    if (!note || note.user.toString() !== userId) {
      return res.status(404).json({ msg: "Note not found" });
    }

    res.status(200).json({ note });
  } catch (err) {
    res.status(500).json({
      msg: "Error while fetching note",
      error: err.message,
    });
  }
};

const updateNote = async (req, res) => {
  const userId = req.user.id;
  const noteId = req.params.id;
  const { title, content } = req.body;

  try {
    const updatedNote = await NoteModel.findOneAndUpdate(
      { _id: noteId, user: userId },
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ msg: "Note not found or not authorized" });
    }

    res.status(200).json({
      msg: "Note updated successfully",
      note: updatedNote,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error updating note",
      error: err.message,
    });
  }
};


module.exports = {
    createNote,
    getUserNotes,
    getNoteById,
    updateNote
};
