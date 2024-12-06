const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const Employee = require('./models/Employee');

// Initialize the Express app
const app = express();

// Middleware
app.use(cors()); // Allow requests from other origins (e.g., your Angular app)
app.use(bodyParser.json()); // Parse incoming JSON requests

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync(); // Sync models with database
  })
  .catch(err => console.error('Unable to connect to the database:', err));

// Routes
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.findAll(); // Fetch all employees
    res.json(employees); // Send the employees as JSON
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
