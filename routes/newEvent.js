const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
    queries.list()
        .then(events => {
            response.json({
                events
            });
        })
        .catch(next);
});

router.get("/:date", (request, response, next) => {
    queries.read(request.params.date)
        .then(event => {
            event
                ?
                response.json({
                    event
                }) :
                response.status(404).json({
                    message: 'Not found'
                })
        })
        .catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body)
        .then(event => {
            response.status(201).json({
                event
            });
        })
        .catch(next);
});

router.delete("/:date", (request, response, next) => {
    queries.delete(request.params.date)
        .then(() => {
            response.status(204).json({
                deleted: true
            });
        })
        .catch(next);
});

router.put("/:date", (request, response, next) => {
    queries.update(request.params.date, request.body)
        .then(event => {
            response.json({
                event
            });
        })
        .catch(next);
});

module.exports = router;
