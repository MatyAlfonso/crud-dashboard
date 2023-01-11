import axios from 'axios';

const API_URL = '/api/giveaways/';

// Get giveaways 
const getGiveaways = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config);
    return response.data;
}

// Create giveaways
const createGiveaway = async (giveawayData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, giveawayData.giveawayData, config);

    return response.data;
}

// Edit giveaway
const editGiveaway = async (giveawayData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + giveawayData.giveawayData._id, giveawayData.giveawayData, config);

    return response.data;
}

// Delete giveaways
const deleteGiveaway = async (giveawayId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + giveawayId, config);

    return response.data;
}

const authService = {
    getGiveaways,
    createGiveaway,
    editGiveaway,
    deleteGiveaway
}

export default authService;