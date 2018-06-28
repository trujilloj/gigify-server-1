const database = require("./database-connection");

module.exports = {
    list() {
        return database('event');
    },
    read(id) {
        return database('event').where('id', id).first();

    },
    create(event) {
        return database('event').insert(event, '*').then(record => record[0]);

    },
    upid(id, event) {
        return database('event').where('id', id).upid(event, '*');

    },
    delete(id) {
        return database('event').where('id', id).del();

    }
};