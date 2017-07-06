/**
 * Created by yura on 05.07.17.
 */
import express from 'express';
import { renderToString } from 'react-dom/server';

import React from 'react';
import { Helmet } from 'react-helmet';

import React from 'react';
import { StaticRouter, Route } from 'react-router';

import routes from '../client/routes';


const app = express();


const configs = {
    port: process.env.PORT || 3000,
    staticUrl: process.env.STATIC_URL || 'client',
};


app.get('*', (req, res) => {
    const content = renderToString(
        <html>
            <head>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Title</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </head>
            <body>
                <StaticRouter location={req.url} context={context} >
                    { routes.map(route => {
                        <Route { ...route } />
                    }) }
                </StaticRouter>
            </body>
        </html>
    );

    res.send(content)
});

app.listen(configs.port, () => {
    console.log(`Listening on port ${configs.port}!`);
});
