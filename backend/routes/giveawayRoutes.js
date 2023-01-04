const express = require('express');
const router = express.Router();
const {
    getGiveaway,
    postGiveaway,
    updateGiveaway,
    deleteGiveaway
} = require('../controllers/giveawayController');

const { protect } = require('../middleware/authMiddleware');

// GET & POST
router.route('/').get(protect, getGiveaway).post(protect, postGiveaway);

// PUT & DELETE
router.route('/:id').put(protect, updateGiveaway).delete(protect, deleteGiveaway);

module.exports = router;