const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Client = require('../models/Client');

exports.register = async (req, res) => {
  // lógica de registro
};

exports.login = async (req, res) => {
  // lógica de inicio de sesión
};

exports.getClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};