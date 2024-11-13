const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Show all jobs
router.get('/', async (req, res) => {
    const jobs = await Job.find();
    res.render('index', { jobs });
});

// Form to create a new job
router.get('/new', (req, res) => {
    res.render('new');
});

// Create a new job
router.post('/', async (req, res) => {
    const { company, position, status } = req.body;
    await Job.create({ company, position, status });
    res.redirect('/jobs');
});

// Show edit form for a job
router.get('/:id/edit', async (req, res) => {
    const job = await Job.findById(req.params.id);
    res.render('edit', { job });
});

// Update a job
router.put('/:id', async (req, res) => {
    const { company, position, status } = req.body;
    await Job.findByIdAndUpdate(req.params.id, { company, position, status });
    res.redirect('/jobs');
});

// Delete a job
router.delete('/:id', async (req, res) => {
    await Job.findByIdAndDelete(req.params.id);
    res.redirect('/jobs');
});

module.exports = router;
