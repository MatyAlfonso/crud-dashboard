const asyncHandler = require('express-async-handler');

// GET /api/giveaways
const getGiveaway = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'GET giveaways' });
})

// POST /api/giveaways
const postGiveaway = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    };

    res.status(201).json({ message: 'POST giveaways' });
})

// PUT /api/giveaways/:id
const updateGiveaway = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `PUT giveaway ${req.params.id}` });
})

// DELETE /api/giveaways/:id
const deleteGiveaway = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `DELETE giveaway ${req.params.id}` });
})

module.exports = {
    getGiveaway,
    postGiveaway,
    updateGiveaway,
    deleteGiveaway
}