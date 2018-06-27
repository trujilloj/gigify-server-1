const events = require('../events');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('event').del()
    .then(function () {
      // Inserts seed entries
      return knex('event').insert(events);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE event_id_seq RESTART WITH 4;");
    });
};