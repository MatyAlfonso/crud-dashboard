const express = require('express');
const router = express.Router();
const {
    getGiveaway,
    postGiveaway,
    updateGiveaway,
    deleteGiveaway
} = require('../controllers/giveawayController');

// GET & POST
router.route('/').get(getGiveaway).post(postGiveaway);

// PUT & DELETE
router.route('/:id').put(updateGiveaway).delete(deleteGiveaway);

module.exports = router;