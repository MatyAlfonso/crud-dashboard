const asyncHandler = require('express-async-handler');

const Giveaway = require('../models/giveawayModel');

// GET /api/giveaways
const getGiveaway = asyncHandler(async (req, res) => {

    const giveaways = await Giveaway.find();

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
    });

    res.status(201).json(giveaway);
});

// PUT /api/giveaways/:id
const updateGiveaway = asyncHandler(async (req, res) => {

    const giveaway = await Giveaway.findById(req.params.id);

    if (!giveaway) {
        res.status(400);
        throw new Error('Giveaway not found');
    };

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

    await giveaway.remove();

    res.status(200).json({message: `${req.params.id} deleted`});
});

module.exports = {
    getGiveaway,
    postGiveaway,
    updateGiveaway,
    deleteGiveaway
};