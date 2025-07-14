const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;

// ✅ Correct MongoDB URI (put in .env if needed)
mongoose.connect('mongodb+srv://tiwaryishita56:68daunabfD3bLLIm@cluster0.70vfu21.mongodb.net/sailpointdb?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// ✅ Schema
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  roles: [String],
  status: String
});

const User = mongoose.model('User', UserSchema);

// ✅ Route
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
