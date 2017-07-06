/**
 * Created by yura on 05.07.17.
 */

const path = require('path');

const configs = require('./configs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const extractStyles = new ExtractTextPlugin({
    filename: 'styles/[name].[contenthash].css',
    allChunks: true,
    disable: false
});


module.exports = {
    context: path.join(__dirname, '../'),
    entry: {

    },
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    query: configs.compiler_babel
                }]
            },
            {
                test   : /\.json$/,
                loader : 'json-loader'
            },
            // {
            //     test: /\.(sass|scss)$/,
            //     loader: extractStyles.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 options: {
            //                     sourceMap: configs.source_maps,
            //                     minimize: {
            //                         autoprefixer: {
            //                             add: true,
            //                             remove: true,
            //                             browsers: ['last 2 versions']
            //                         },
            //                         discardComments: {
            //                             removeAll: true
            //                         },
            //                         discardUnused: false,
            //                         mergeIdents: false,
            //                         reduceIdents: false,
            //                         safe: true,
            //                         sourcemap: configs.source_maps
            //                     }
            //                 }
            //             },
            //             {
            //                 loader: 'resolve-url-loader'
            //             },
            //             {
            //                 loader: 'sass-loader',
            //                 options: {
            //                     sourceMap: configs.source_maps,
            //                     includePaths: [
            //                         configs.paths.styles
            //                     ]
            //                 }
            //             }
            //         ]
            //     })
            // }
        ]
    },

    plugins: [

    ]
};
