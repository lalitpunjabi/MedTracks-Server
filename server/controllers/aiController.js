exports.getMedicineDetails = (req, res) => {
  const { medicineName } = req.query;
  // Mock AI response
  const mockResponse = {
    name: medicineName,
    purpose: `Treats ${medicineName.toLowerCase()} related conditions`,
    sideEffects: ['Nausea', 'Dizziness'],
    instructions: 'Take with food',
  };
  res.json(mockResponse);
};