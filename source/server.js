/**
 * Created by yura on 05.07.17.
 */

import express from 'express';
import { renderToString } from 'react-dom/server';


const app = express();


const configs = {
    port: process.env.PORT || 3000,
    staticUrl: process.env.STATIC_URL || 'static',
};


app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.listen(configs.port, () => {
    console.log(`Listening on port ${configs.port}!`);
});
