const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: 'bundle.js',
        assetModuleFilename: "assets/[hash][ext][query]",
        environment: {
            // arrowFunction: 'false'
        },
    },
    resolve: {
        extensions: [".ts",".js"]
    },
    module: {
        rules: [
            {
                test: /.(js|jsx|ts|tsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets:  [
                        [
                            '@babel/env',
                            {
                                "useBuiltIns": "usage",
                                "corejs": "3.22",
                                "targets": {
                                    "chrome": "58",
                                    "ie": '10'
                                }
                            }
                        ],
                        '@babel/preset-react'
                    ]
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader","css-loader",'sass-loader']
            },
            {
                test: /\.(png)|(jpg)|(jpeg)|(gif)/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024 // 4kb
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minifi: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
}