const axios = require('axios');

module.exports = (req, res, next) => {
    const originalAxiosRequest = axios.request;

    axios.request = async (config) => {
        const token = req.headers.authorization;
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: token,
            };
        }
        return originalAxiosRequest(config);
    };

    next();
};