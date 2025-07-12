exports.getHealthTips = (req, res) => {
  res.json({
    tips: [
      "Drink plenty of water every day.",
      "Take your medicines on time.",
      "Exercise regularly for a healthy body.",
      "Eat a balanced diet rich in fruits and vegetables."
    ]
  });
}; 