exports.seed = async function (knex) {
    await knex("cars").truncate();

    await knex("cars").insert([
        {
            vin: "VIN1000002",
            make: "Toyota",
            model: "Corolla 2019",
            mileage: 2800,
            transmission: "auto",
            title_status: "clean",
        },
        {
            vin: "VIN1000003",
            make: "Toyota",
            model: "Sienna 2019",
            mileage: 200,
            transmission: "auto",
            title_status: "clean",
        },
        {
            vin: "VIN1000004",
            make: "Honda",
            model: "Civic 2019",
            mileage: 1800,
            transmission: "auto",
            title_status: "clean",
        },
    ]);
};
