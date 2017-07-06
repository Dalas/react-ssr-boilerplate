/**
 * Created by yura on 05.07.17.
 */

import express from 'express';
import { renderToString } from 'react-dom/server';
import asd from './client/test';


const app = express();


const configs = {
    port: process.env.PORT || 3000,
    staticUrl: process.env.STATIC_URL || 'client',
};


app.get('*', (req, res) => {
    const content = renderToString(asd);

    const HTML = `
        <!DOCTYPE html >
        <html>
            <head>
                <meta charset="utf-8">
                <title>Isomorphic Redux Demo</title>
                </head>
            <body>
                ${content}
                <script type="application/javascript" src="${configs.staticUrl}/vendor.js"></script>
            </body>
        </html>`;

    res.send(HTML)
});

app.listen(configs.port, () => {
    console.log(`Listening on port ${configs.port}!`);
});
