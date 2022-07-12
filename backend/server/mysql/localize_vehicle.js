const { fleet_exists, vehicle_exists } = require('./exists');

const NULL = (v) => (v) ? v : 'NULL'

module.exports = async (mysql, fleet, plate, lat, lng, alt) => {	
	if (!(await fleet_exists(mysql, fleet)))
		return ({ status: -1, code: 1, message: `Fleet ${ fleet } does not exists.` });
	if (!(await vehicle_exists(mysql, plate)))
		return ({ status: -1, code: 2, message: `Vehicle ${ plate } does not exists.` });

	const v = await mysql.query(`
		UPDATE vehicles 
		SET lat=${NULL(lat)}, lng=${NULL(lng)}, alt=${NULL(alt)}
		WHERE plate = "${plate}"
	`);
	return ({ status: 0, code: 0, message: `Vehicle ${plate} updated.` });
}
