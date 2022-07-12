module.exports = async (mysql) => await mysql.query('INSERT INTO fleets (vehicles_ids) VALUES ("") RETURNING id');
