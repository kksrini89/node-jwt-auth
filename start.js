const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
  console.log(`Something gone wrong...${err.message}`);
});

// Import Models
require('./models/user');
require('./models/item');

const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Server is running at ${server.address().port}`);
});
