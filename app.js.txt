const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT  3000;

mongoose.connect('mongodb+srvtiwaryishita5668daunabfD3bLLIm@cluster0.70vfu21.mongodb.netsailpointdbretryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser true,
  useUnifiedTopology true
});

const UserSchema = new mongoose.Schema({
  username String,
  email String,
  roles [String],
  status String
});

const User = mongoose.model('User', UserSchema);

app.get('users', async (req, res) = {
  const users = await User.find();
  res.json(users);
});

app.listen(PORT, () = {
  console.log(`Server running at httplocalhost${PORT}`);
});
