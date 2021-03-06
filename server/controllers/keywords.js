const express = require('express'),
    router = express.Router(),
    Keyword = require('../models/keyword');

// Routes
// Get keywords
router.get('/', (req, res) => {
    Keyword.get((keywords) => {
        res.json(keywords);
    });
});

// Get keyword
router.get('/:keyword_id', (req, res) => {
    Keyword.getById(req.params.keyword_id, (keywords) => {
        res.json(keywords);
    });
});

// Create keyword and send back all keywords after creation
router.post('/', (req, res) => {
    Keyword.create(req.body.keyword.title, req.body.keyword.mid, req.body.keyword.type, req.body.twitterName, (keyword) => {
        console.log(keyword);
    });
});

// Update a keyword
router.put('/:keyword_id', (req, res) => {
    Keyword.update(id, {}, () => {

    });
});

// Delete a keyword
router.delete('/:keyword_id', (req, res) => {
    Keyword.delete(req.params.keyword_id, (data) => {
        console.log(data);
    });
});

module.exports = router;
