const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/rendering/index.tsx',
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({ template: './src/resources/index.html' })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist', 'web'),
        compress: true,
        port: 8000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components')
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist', 'web')
    }
};