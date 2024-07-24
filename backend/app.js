require("dotenv").config();
const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const cors = require("cors");
const { connectingDB } = require("./config/db.connect");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(cors());
app.use(express.json());

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  return res.send("<h2>Welcome to backend</h2>");
});


app.use('/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});