import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';

dotenv.config(); // Load environment variables first

const app = express();
app.use(cors());
app.use(express.json()); // Add middleware to parse JSON bodies

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB:', err.message);
});

// Define routes
app.use('/book', bookRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
