const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool:'cheap-module-source-map',
    entry: {
         popup:path.resolve('./src/popup/popup.tsx')
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('src/static'),
                    to: path.resolve('dist')
                },
                {
                    from: path.resolve('src/assets'),
                    to: path.resolve('dist')
                },
            ],
        }),
        new HtmlPlugin({
            title: 'ReactJS Boilerplate',
            filename:'popup.html',
            chunks:['popup']
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                use:['style-loader','css-loader'],
                test: /\.css$/i,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js'
    },
};