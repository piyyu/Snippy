const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 3000
connectDB();
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));

app.get('/users', async (req, res) => {
    const { UserModel } = require('./models/userModel');
    const users = await UserModel.find();
    res.json(users);
  });

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))