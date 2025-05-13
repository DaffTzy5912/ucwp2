
const express = require('express');
const router = express.Router();

// Example Route
router.post('/register', (req, res) => {
  const { name, number } = req.body;
  // Simpan ke database
  res.status(200).json({ message: 'Pendaftaran berhasil!' });
});

module.exports = router;
