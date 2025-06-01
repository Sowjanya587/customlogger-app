const axios = require('axios');

async function getMarketingCloudToken() {
  const url = 'https://YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/token';
  const body = {
    grant_type: "client_credentials",
    client_id: process.env.MC_CLIENT_ID,       // better to use env vars
    client_secret: process.env.MC_CLIENT_SECRET,
    account_id: process.env.MC_ACCOUNT_ID
  };

  try {
    const response = await axios.post(url, body);
    console.log('Access Token:', response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting token:', error.response ? error.response.data : error.message);
  }
}

module.exports = { getMarketingCloudToken };
