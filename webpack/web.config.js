const path = require('path');
const webpack = require('webpack');
const globals = require('../src/config/globals');

module.exports = {
    name: 'client',
    devtool: 'eval-source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client?reload=true&noInfo=true',
            'babel-polyfill',
            path.resolve(__dirname, '../src/web'),
        ],
        vendor: [
            'prop-types',
            'react',
            'react-dom',
            'react-router',
            'react-redux',
            'react-router-dom',
            'redux',
        ],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/dist/',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.svg$/,
                loader: 'babel-loader!svg-react-loader',
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader?limit=10000',
            },
            {
                exclude: [
                    /\.jsx?$/,
                    /\.css$/,
                    /\.svg$/,
                    /\.(jpe?g|png|gif)$/i,
                    /\.json$/,
                ],
                loader: 'file-loader',
                options: { name: 'static/[name].[ext]' },
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin(globals('client')),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            src: path.resolve(__dirname, '../src'),
            app: path.resolve(__dirname, '../src/web/app'),

            common: path.resolve(__dirname, '../src/web/app/components/common'),
            components: path.resolve(__dirname, '../src/web/app/components'),
            modules: path.resolve(__dirname, '../src/web/app/components/modules'),

            config: path.resolve(__dirname, '../src/config'),
            constants: path.resolve(__dirname, '../src/constants'),
            ducks: path.resolve(__dirname, '../src/ducks'),
            lib: path.resolve(__dirname, '../src/lib'),

            fonts: path.resolve(__dirname, '../src/assets/fonts'),
            images: path.resolve(__dirname, '../src/assets/images'),
            server: path.resolve(__dirname, '../src/web/server'),
            vectors: path.resolve(__dirname, '../src/assets/vectors'),
        },
    },
};
