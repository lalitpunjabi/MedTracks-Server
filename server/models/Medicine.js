const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  purpose: String,
  dosage: String,
  doctorName: String,
  startDate: Date,
  endDate: Date,
  schedule: [{ time: String, dose: String }],
});

module.exports = mongoose.model('Medicine', medicineSchema);