let statsStore = {};

exports.updateStats = (req, res) => {
  const { user, sessions, garden } = req.body;

  statsStore[user] = { sessions, garden };
  res.json({ msg: "Stats updated" });
};

exports.getStats = (req, res) => {
  const user = req.params.user;
  res.json(statsStore[user] || { sessions: 0, garden: 0 });
};
