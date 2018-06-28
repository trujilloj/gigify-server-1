const express = require('express');
const cors = require('cors');
const router = express.Router()
    .use(cors());

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

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
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

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id)
        .then(() => {
            response.status(204).json({
                deleted: true
            });
        })
        .catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.upid(request.params.id, request.body)
        .then(event => {
            response.json({
                event
            });
        })
        .catch(next);
});

module.exports = router;