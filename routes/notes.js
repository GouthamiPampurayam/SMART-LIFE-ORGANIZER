const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.post("/", async(req,res)=>{
  const note = new Note(req.body);
  await note.save();
  res.send("Note Saved");
});

router.get("/", async(req,res)=>{
  const notes = await Note.find();
  res.json(notes);
});

module.exports = router;
