exports.loginUser = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ msg: "Name required" });

  res.json({ msg: "Login successful", user: name });
};
