const fleet_exists = async (mysql, fleet) => {
	const f = await mysql.query(`SELECT id, vehicles_ids FROM fleets WHERE id = '${fleet}'`);
	return !(!f.length);
}

const vehicle_exists = async (mysql, plate) => {
	const v = await mysql.query(`SELECT id FROM vehicles WHERE plate = '${plate}'`);
	return !(!v.length);
}

module.exports = {
	fleet_exists,
	vehicle_exists
}
