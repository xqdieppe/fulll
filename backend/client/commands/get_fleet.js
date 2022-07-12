const axios = require('axios');
const yaml = require('yaml');
const https = require('https');
const httpsAgent = new https.Agent({ rejectUnauthorized: false });
const instance = axios.create({ httpsAgent });

module.exports = async (url, args) => { 
	const data = (await instance.get(`${url}/fleet/${args[0]}`)).data;
	if (typeof data == "object") {
		console.log(yaml.stringify(data.message))
	} else { console.log(data.message) }
}
