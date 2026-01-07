let diaryStore = []; // works even without DB

exports.saveDiary = (req, res) => {
  const { user, text, time } = req.body;

  const entry = { user, text, time };
  diaryStore.push(entry);

  res.json({ msg: "Diary saved", entry });
};

exports.getDiary = (req, res) => {
  const user = req.params.user;
  const data = diaryStore.filter(d => d.user === user);
  res.json(data);
};
