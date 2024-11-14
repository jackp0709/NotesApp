const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: String,
    content: String,
});
const Note = mongoose.model('Note', NoteSchema);

router.post('/', async (req, res) => {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    await note.save();
    res.json(note);
});

router.get('/', async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

router.put('/:id', async (req, res) => {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.json(note);
});

router.delete('/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted' });
});

module.exports = router;
