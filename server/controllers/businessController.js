onst bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Business = require('../models/Business');
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

exports.addPoints = async (req, res) => {
  try {
    const { clientId, points } = req.body;
    const client = await Client.findByPk(clientId);
    if (client) {
      client.points += points;
      await client.save();
      res.json(client);
    } else {
      res.status(404).json({ error: 'Client not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};