const { fleet_exists, vehicle_exists } = require('./exists');

module.exports = async (mysql, fleet, plate) => {	
	if (!(await fleet_exists(mysql, fleet)))
		return ({ status: -1, code: 1, message: `Fleet ${ fleet } does not exists.` });
	if ((await vehicle_exists(mysql, plate)))
		return ({ status: -1, code: 2, message: `Vehicle ${ plate } already exists.` });

	const v = await mysql.query(`INSERT INTO vehicles (plate) VALUES ("${plate}") RETURNING id`);

	const f = await mysql.query(`SELECT id, vehicles_ids FROM fleets WHERE id = '${fleet}'`);

	const arr = f[0].vehicles_ids.split(',');
	var vids = arr.concat([v[0].id]).join(',');
	vids = (vids.startsWith(',')) ? vids.substr(1) : vids;

	await mysql.query(`
		UPDATE fleets
		SET vehicles_ids = "${ vids }"
		WHERE id = '${fleet}'
	`);
	return ({ status: 0, code: 0, message: `Vehicle ${plate} added to fleet ${fleet}.` });
}
