/**
 * Created by yura on 05.07.17.
 */

const configs = {
    env: process.env.NODE_ENV || 'development',

    // ----------------------------------
    // Compiler Configuration
    // ----------------------------------
    compiler_babel : {
        cacheDirectory: true,
        babelrc: false,
        plugins: [
            'transform-class-properties',
            [
                'transform-runtime',
                {
                    helpers: true,
                    polyfill: true,
                    regenerator: true
                }
            ],
            [ 'transform-object-rest-spread' ]
        ],
        presets: [
            'react',
            ['env', {
                uglify: false,
                modules: false,
                targets: {
                    'browsers': ['last 2 versions', 'safari >= 7', 'ie 10', 'chrome 47']
                }
            }]
        ]
    },

    source_maps : true,

    paths: {
        styles: 'styles'
    }
};

module.exports = configs;
