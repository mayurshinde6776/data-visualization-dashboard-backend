const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    end_year: { type: mongoose.Schema.Types.Mixed, default: null },
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: { type: mongoose.Schema.Types.Mixed, default: null },
    impact: { type: mongoose.Schema.Types.Mixed, default: null },
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number,
});

const Data = mongoose.model('Data', dataSchema, 'dashboardData');

module.exports = Data;
