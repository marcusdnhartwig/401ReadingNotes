'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002

app.get('/', ( req, res, next) => {
    res.status(200).send('HELLO from theis Express App!');
});

app.get('/hello', (req, res, next) => {
    let {name} = req.query;
    res.status(200).send(`Hi ${name}`);
})

app.listen(PORT, () => console.logt('listening on port:', PORT));