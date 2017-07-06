/**
 * Created by yura on 05.07.17.
 */

const path = require('path');
const webpack = require('webpack');
const client = require('universal-webpack/config').client;
const settings = require('./universal-webpack-settings');
const configuration = require('./webpack.config');


/* ************************* */
/*      Client entries       */
/* ************************* */
configuration.entry = {
    server: './source/client/test.js'
};


/* ************************* */
/*        Output path        */
/* ************************* */
configuration.output
    .path = path.join(__dirname, '../build/client');


/* ************************* */
/*       Vendor packages     */
/* ************************* */
configuration.entry
    .vendor = [
        'react', 'react-dom'
    ];


/* ************************* */
/*       Output target       */
/* ************************* */
configuration
    .target = 'web';


/* ************************* */
/* Additional client plugins */
/* ************************* */
configuration.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
    })
);


module.exports = client(configuration, settings);
