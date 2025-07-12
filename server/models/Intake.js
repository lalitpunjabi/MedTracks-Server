const mongoose = require('mongoose');

const intakeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  medicineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine', required: true },
  status: { type: String, enum: ['taken', 'missed', 'postponed'], required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Intake', intakeSchema);