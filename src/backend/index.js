const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const Employee = require('./models/Employee');
const employeeRoutes = require('./routes/employee');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/employees', employeeRoutes);

// Test DB connection and synchronize models
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Models synchronized.');
    // Start the server after successful DB connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
