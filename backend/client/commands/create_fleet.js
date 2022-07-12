const axios = require('axios');
const https = require('https');
const httpsAgent = new https.Agent({ rejectUnauthorized: false });
const instance = axios.create({ httpsAgent });

module.exports = async (url, args) => 
	console.log((await instance.post(`${url}/fleet/create`, { uid: args[0] })).data);
