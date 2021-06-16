const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
// const WOW = require('wowjs');
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash].js', //Имя файла, которое будет присваиваться скрипту после сборки. [name].[contenthash].js - уникальное хэшированное имя
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            'three-examples': path.join(__dirname, './node_modules/three/examples/js')
        },
    },
    devServer: {
        port: 3100
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new CleanWebpackPlugin(),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
    ],
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, //если нужно обработать ещё какие-то файлы, то можно добавить в этот список
                use: [{
                    loader: 'file-loader'
                }, ]
            },
        ]
    },
}