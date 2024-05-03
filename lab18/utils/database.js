const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"tc2005b",
    database: "users_test",
    port: 3406,
    connectionLimit:5
});

module.exports = async () => {
    try {
        const connection = await pool.getConnection();
        return connection;
    } catch (error) {
        throw error; // Re-throw the error for proper handling
    }
};