const mysql = require("mysql2/promise");
require("dotenv").config();

async function getConnection() {
	try {
		const conn = await mysql.createConnection({
			host: "sql.freedb.tech",
			port: 3306,
			user: "freedb_PatriXcX",
			password: "#bH7UZrC%4T32fQ",
			database: "freedb_proyecto_team_2_4",
		});

		await conn.connect();

		return conn;
	} catch (error) {
		console.log(error);

		return null;
	}
}

module.exports = getConnection;
