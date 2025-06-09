const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
dotenv.config();
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 3000
connectDB();
app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/notes', require('./routes/noteRoutes'));

app.use((req, res) => {
  res.status(404).json({ msg: "Route not found" });
});


app.listen(PORT, () => console.log(`server is running on port ${PORT}`))