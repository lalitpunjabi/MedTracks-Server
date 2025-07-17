const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const medicineRoutes = require('./routes/medicine');
const intakeRoutes = require('./routes/intake');
const healthTipsRoutes = require('./routes/healthTips');
// const path = require('path');

dotenv.config();
const app = express();

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));
app.use(express.json());

app.use('/', (req, res) => {
  res.send('MedTracks API is running');
});
app.use('/api', authRoutes);
app.use('/api/medicines', medicineRoutes);
app.use('/api/intake', intakeRoutes);
app.use('/api/health-tips', healthTipsRoutes);

// app.use(express.static(path.join(__dirname, 'build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));