const path = require('path');
const webpackMerge = require('webpack-merge');

const baseConfig = {
    mode: 'production',
    module: {
        rules: [
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
                oneOf: [
                    {
                        resourceQuery: /external/,
                        loader: 'url-loader?limit=10000',
                    },
                    {
                        loader: 'babel-loader!svg-react-loader',
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                oneOf: [
                    {
                        resourceQuery: /external/,
                        loader: 'file-loader?name=static/[name].[ext]',
                    },
                    {
                        loader: 'url-loader?limit=10000',
                    },
                ],
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
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            src: path.resolve(__dirname, '../src'),
            app: path.resolve(__dirname, '../src/web/app'),

            common: path.resolve(__dirname, '../src/web/app/common'),
            modules: path.resolve(__dirname, '../src/web/app/modules'),

            config: path.resolve(__dirname, '../src/config'),
            ducks: path.resolve(__dirname, '../src/ducks'),
            lib: path.resolve(__dirname, '../src/lib'),

            fonts: path.resolve(__dirname, '../src/assets/fonts'),
            images: path.resolve(__dirname, '../src/assets/images'),
            server: path.resolve(__dirname, '../src/web/server'),
            vectors: path.resolve(__dirname, '../src/assets/icons'),
        },
    },
};

const merge = (...config) => webpackMerge(baseConfig, ...config);

module.exports = merge;
