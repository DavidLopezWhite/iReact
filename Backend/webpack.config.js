var webpack = require('webpack');
var path = require('path');

module.exports = {
    // entry: provided by serverless
    // output: provided by serverless
    entry: './handler.js',
    target: 'node',
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },
    output: {
      ...,
      libraryTarget: 'commonjs',
    },
    externals: [
      /^(?!\.|\/).+/i,
    ],
    externals: [
        'aws-sdk'
    ],
    resolve: {
        extensions: ['', '.js', '.json', '.jsx', '.es6', '.babel', '.node']
    },
    devtool: 'source-map',
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
                drop_debugger: true
            }
        })
    ],
    module: {
        preLoaders: [
            { test: /\.json$/, exclude: /node_modules/, loader: 'json-loader'},
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.json$/, loader: "json-loader" }

        ]
    }
};
