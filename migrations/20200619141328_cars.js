exports.up = async function (knex) {
    await knex.schema.createTable("cars", (table) => {
        //table.integer("id").notNull().unique().primary();
        table.increments("id"); // same value with 3rd line
        table.text("vin").notNull().unique();
        table.text("make").notNull().unique();
        table.text("model").notNull().unique();
        table.integer("mileage").notNull();
        table.text("transmission");
        table.text("title_status");
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("cars");
};
