const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

//DATABASE

const DB = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection sucessful');
  });

// const testTour = new Tour({
//   name: 'Olumo Rock',
//   rating: 4.7,
//   price: 457,
// });

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('Error:', err);
//   });

//SERVER
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on ${port}...`);
});