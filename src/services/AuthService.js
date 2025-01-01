const axios = require('axios');

const login = async () => {
    try {
        const response = await axios({
            method: 'POST',
            url: 'https://app.orbaic.com/api/auth/login',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                email: 'nsu.turag@gmail.com',
                password: 'Turag123@',
            },
        });
        // console.log('Login successful:', response.data);
        return response.data.result.accessToken; // Adjust based on actual response structure
    } catch (error) {
        console.error('Failed to fetch access token:', error.response?.data || error.message);
        throw error;
    }
};

module.exports = { login };
