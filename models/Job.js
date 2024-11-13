const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company: String,
    position: String,
    status: { type: String, default: 'Pending' },
    dateApplied: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);
