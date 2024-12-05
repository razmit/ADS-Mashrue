const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get employee by ID
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new employee
router.post('/', async (req, res) => {
  try {
    const { name, position, department } = req.body;
    const newEmployee = await Employee.create({ name, position, department });
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update employee
router.put('/:id', async (req, res) => {
  try {
    const { name, position, department } = req.body;
    const [updated] = await Employee.update(
      { name, position, department },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedEmployee = await Employee.findByPk(req.params.id);
      res.json(updatedEmployee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete employee
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Employee.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.json({ message: 'Employee deleted' });
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
