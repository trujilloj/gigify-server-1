const database = require("./database-connection");

module.exports = {
    list() {
        return database('event');
    },
    read(date) {
        return database('event').where('date', date).first();

    },
    create(event) {
        return database('event').insert(event, '*').then(record => record[0]);

    },
    update(date, event) {
        return database('event').where('date', date).update(event, '*');

    },
    delete(date) {
        return database('event').where('date', date).del();

    }
};