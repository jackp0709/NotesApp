const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('<Your MongoDB Connection String>').then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

// Define Note schema and model
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Note = mongoose.model('Note', noteSchema);

// CRUD operations
app.post('/notes', async (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  await note.save();
  res.send(note);
});

app.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.send(notes);
});

app.delete('/notes/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.send({ message: 'Note deleted' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
