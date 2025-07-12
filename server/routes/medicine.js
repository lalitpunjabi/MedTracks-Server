const express = require('express');
const auth = require('../middleware/auth');
const Medicine = require('../models/Medicine');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const medicines = await Medicine.find({ userId: req.user.userId });
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', auth, async (req, res) => {
  const { name, type, purpose, dosage, doctorName, startDate, endDate, schedule } = req.body;
  try {
    const medicine = new Medicine({
      userId: req.user.userId,
      name,
      type,
      purpose,
      dosage,
      doctorName,
      startDate,
      endDate,
      schedule,
    });
    await medicine.save();
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine || medicine.userId.toString() !== req.user.userId) {
      return res.status(404).json({ error: 'Medicine not found' });
    }
    Object.assign(medicine, req.body);
    await medicine.save();
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine || medicine.userId.toString() !== req.user.userId) {
      return res.status(404).json({ error: 'Medicine not found' });
    }
    await medicine.remove();
    res.json({ message: 'Medicine deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/sync-calendar', auth, async (req, res) => {
  const { medicineId } = req.body;
  try {
    const medicine = await Medicine.findById(medicineId);
    if (!medicine || medicine.userId.toString() !== req.user.userId) {
      return res.status(404).json({ error: 'Medicine not found' });
    }
    console.log(`Syncing ${medicine.name} to Google Calendar`);
    res.json({ message: 'Synced to Google Calendar (mock)' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;