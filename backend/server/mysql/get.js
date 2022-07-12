const vehicle_get = async (mysql, vehicle) => {
	const v = await mysql.query(`SELECT id,plate,lat,lng,alt FROM vehicles WHERE id = '${vehicle}'`);
	return (v[0]);
}

const fleet_get = async (mysql, fleet) => {
	const f = await mysql.query(`SELECT id, vehicles_ids FROM fleets WHERE id = '${fleet}'`);
	if (!f.length) return (undefined);
	const vehicles_ids = (f[0]) ? f[0].vehicles_ids.split(',') : [];
	const vehicles = await Promise.all(vehicles_ids.map(async (id) => vehicle_get(mysql, id)))
	return ({ id: f[0].id, vehicles });
}

module.exports = {
	fleet_get,
	vehicle_get
}
