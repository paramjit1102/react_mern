// controllers/userController.js

const { User } = require('../../models');

exports.createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({ username, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      const { username, email } = req.body;
      user.username = username || user.username;
      user.email = email || user.email;
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    console.log('stat')
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
