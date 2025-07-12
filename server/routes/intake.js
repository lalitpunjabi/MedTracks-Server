const express = require('express');
const auth = require('../middleware/auth');
const Intake = require('../models/Intake');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { medicineId, status } = req.body;
  try {
    const intake = new Intake({
      userId: req.user.userId,
      medicineId,
      status,
    });
    await intake.save();
    res.json(intake);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const intakes = await Intake.find({ userId: req.user.userId });
    const streak = calculateStreak(intakes);
    res.json({ intakes, streak });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

function calculateStreak(intakes) {
  let streak = 0;
  const sortedIntakes = intakes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  for (let i = 0; i < sortedIntakes.length; i++) {
    if (sortedIntakes[i].status === 'taken') {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

module.exports = router;