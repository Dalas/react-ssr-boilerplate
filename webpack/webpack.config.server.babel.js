/**
 * Created by yura on 05.07.17.
 */

const path = require('path');

const server = require('universal-webpack').server_configuration;
const settings = require('./universal-webpack-settings');
const configuration = require('./webpack.config');


/* ************************* */
/*      Server entries       */
/* ************************* */
configuration.entry = {
    server: './source/server/server.js'
};

configuration.output
    .path = path.join(__dirname, '../build/server');

configuration
    .target = 'node';


module.exports = server(configuration, settings);
