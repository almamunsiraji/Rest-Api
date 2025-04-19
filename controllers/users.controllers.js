let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");
const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};
const creatUsers = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json({ users });
};
const updateUsers = (req, res) => {
  const userid = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id == userid)
    .map((selecteduser) => {
      selecteduser.username = username;
      selecteduser.email = email;
    });
  res.status(200).json(users);
};
const deleteUsers = (req, res) => {
  const userid = req.params.id;
  users = users.filter((user) => user.id !== userid);
  res.status(200).json(users);
};
module.exports = { getAllUsers, creatUsers, updateUsers, deleteUsers };
