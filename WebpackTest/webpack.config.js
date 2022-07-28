// webpack.config.js
const { resolve } = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    //The current location relative to this file
    context: resolve(__dirname, 'Src'),

    //The start js file(s) for the app
    entry: {
        app: './Scripts/index.js',
        styles: "./Content/index.scss"
    },
    //The output file (in a folder called Dist relative to this file)
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, 'Dist')
    },
    //Files to be referenced externally needs a seperate script tag to load resource
    externals: {
        jquery: 'jQuery'
    },
    //Generate a source map
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    //By default webpack makes css available for use in JS files (as import statements)
                    //To load as a seperate file we use this plugin to extract the css to a file
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            //This "munges" the class names so that they can be used 
                            //in Js files without collisions (css modules)
                            modules: false,
                            sourceMap: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }

                ]
            },
            //Babel loader - convert "Modern" JS to browser compliant JS
            {
                //For anything matching this regex
                test: /\.js$/,
                //excluding this folder
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory : true,
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                          ]
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'images/**/*.*',
                    to: '[path][name].[ext]',
                    force: true,
                    context: 'Content'
                }
            ]
        }),
        new ESLintPlugin({
            extensions: 'js',
            exclude: '/node_modules/',
            fix: true
        })
    ]

};