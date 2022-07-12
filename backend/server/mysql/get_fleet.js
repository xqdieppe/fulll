const { fleet_get } = require('./get');
const { fleet_exists, vehicle_exists } = require('./exists');

module.exports = async (mysql, fleet) => {	
	if (!(await fleet_exists(mysql, fleet)))
		return ({ status: -1, code: 1, message: `Fleet ${ fleet } does not exists.` });
	const f = await fleet_get(mysql, fleet);
	return ({ status: 0, code: 0, message: f });
}
