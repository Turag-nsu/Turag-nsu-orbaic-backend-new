const { login } = require('../services/AuthService');

let token = null;
async function ensureBearerToken() {
    if (!token) {
        // console.log('Token is not available. Fetching a new token...');
        token = await login();
    }
    return token;
}

module.exports = {
    ensureBearerToken
};