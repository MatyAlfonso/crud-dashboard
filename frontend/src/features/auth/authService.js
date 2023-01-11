import axios from 'axios';

const API_URL = 'https://crud-dashboard-production.up.railway.app/api/users/';

// Login user 
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data;
}

// Logout user
const logout = () => {
    localStorage.removeItem('user');
}

const authService = {
    login,
    logout
}

export default authService;