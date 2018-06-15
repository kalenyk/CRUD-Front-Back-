const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ["./app/src/js/index.js"],
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "public"),
        filename: "js/[name].js"
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,

    },
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader:'css-loader',options:{minimize:true} },
                        {loader:"sass-loader"}
                    ]
                })
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:'app/src/images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./app/index.html",
            filename: "./index.html"
        }),
        new ExtractTextPlugin('style.css')
    ]
};
