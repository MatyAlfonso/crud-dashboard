const asyncHandler = require('express-async-handler');

const Giveaway = require('../models/giveawayModel');
const User = require('../models/userModel');


// GET /api/giveaways
const getGiveaway = asyncHandler(async (req, res) => {

    const giveaways = await Giveaway.find({ user: req.user.id });

    res.status(200).json(giveaways);
});

// POST /api/giveaways
const postGiveaway = asyncHandler(async (req, res) => {
    if (!req.body.title || !req.body.image || !req.body.description || !req.body.price || !req.body.region || !req.body.field || !req.body.date || !req.body.multiply || !req.body.repeat) {
        res.status(400);
        throw new Error('All fields are required: title, image, description, price, region, field, date, multiply and repeat');
    };

    const giveaway = await Giveaway.create({
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        price: req.body.price,
        region: req.body.region,
        field: req.body.field,
        date: req.body.date,
        multiply: req.body.multiply,
        repeat: req.body.repeat,
        user: req.user.id
    });

    res.status(201).json(giveaway);
});

// PUT /api/giveaways/:id
const updateGiveaway = asyncHandler(async (req, res) => {

    const giveaway = await Giveaway.findById(req.params.id);

    if (!giveaway) {
        res.status(400);
        throw new Error('Giveaway not found.');
    };

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found.');
    }

    // Logged user matches the giveaway user
    if (giveaway.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized.')
    }

    const updatedGiveaway = await Giveaway.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedGiveaway);
});

// DELETE /api/giveaways/:id
const deleteGiveaway = asyncHandler(async (req, res) => {

    const giveaway = await Giveaway.findById(req.params.id);

    if (!giveaway) {
        res.status(400);
        throw new Error('Giveaway not found');
    };

    // Check for user
    if (!req.user) {
        res.status(401);
        throw new Error('User not found.');
    }

    // Logged user matches the giveaway user
    if (giveaway.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized.')
    }

    await giveaway.remove();

    res.status(200).json({ message: `${req.params.id}` });
});

module.exports = {
    getGiveaway,
    postGiveaway,
    updateGiveaway,
    deleteGiveaway
};