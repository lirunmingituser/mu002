const db = require("../config/db");

module.exports = class {
	static async getAddresses() {
		let connection = await db.getConnection();
		const rows = await connection.query("SELECT * FROM `addressBook`");
		connection.end();
		return rows;
	}
};
