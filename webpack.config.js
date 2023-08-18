const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",//telling our webpack which is the entry point of our app;
    output: {
        path: path.join(__dirname, "/dist"), //path of our bundle file
        filename: "bundle.js" // file name of our output bundle file
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html" //mention the main index  file which will be used  by react to load our application
        })
    ],
    module: {
        rules: [
            {
                test: /.js$/, //mention what files to look for to do the bundling
                exclude: /node_modules/, //mention what files the bundler needs to ignore
                use: {
                    loader: "babel-loader", //mention  whhich  loader are we using for bundling
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"] // mention the presets for js and react
                    }
                }
            }
        ]
    }
}