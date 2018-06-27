exports.up = function (knex, Promise) {
    return knex.schema.createTable('event', table => {
        table.increments();
        table.text('date');
        table.text('venue');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('event')
};