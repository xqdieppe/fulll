const axios = require('axios');
const https = require('https');
const httpsAgent = new https.Agent({ rejectUnauthorized: false });
const instance = axios.create({ httpsAgent });

module.exports = async (url, args) => 
	console.log((await instance.post(`${url}/vehicle/register`,
		{ fleet: args[0], plate: args[1] })).data.message);
