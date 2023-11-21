import mongoose from 'mongoose';
import express from 'express';
import userRouter from './routes/user';

// create app
const app = express();
app.use(express.json());

// connect to mongodb
const mongoUri = 'mongodb://127.0.0.1:27017';
mongoose.connect(mongoUri);
mongoose.connection.once('open', () => {
	console.log('Mongo connected');
});

// router
app.use(userRouter);

const port = 3000;
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
  })
  