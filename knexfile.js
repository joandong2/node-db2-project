module.exports = {
    client: "sqlite3", // specifying the DBMS
    connection: {
        filename: "./data/car-dealer.db3", // location of our database file
        useNullAsDefault: true, // flag required for SQLite
    },
};
