exports.seed = async function (knex) {
    await knex("cars").truncate();

    await knex("cars").insert([
        {
            vin: "VIN2asdfasdfasd",
            make: "Honda",
            model: "Civic 2019",
            mileage: 800,
            transmission: "automatic",
        },
        {
            vin: "adveeVIN2asdfasdfasd",
            make: "Toyota",
            model: "Corolla 2020",
            mileage: 1800,
            title_status: "clean",
        },
    ]);
};
