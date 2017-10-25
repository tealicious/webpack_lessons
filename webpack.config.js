const path = require('path'); // get the system absolute path
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js', // tell webpack where our entry point is
    output: { // big ol' bundled script file to be generated
        path: path.resolve(__dirname, 'build'), //this must an ABSOLUTE path from file system root
        //path.resolve() helps get the right path independent of OS
        // arg 1, __dirname, is a reference to the current working directory
        // arg 2, 'build', is the name of the new output directory to be created
        filename: 'bundle.js', // name of concatinated output file
        publicPath: 'build/' // prepend path to any direct file path reference assets that need a URL (I.E. images loaded into project)
    },
    module: {
        rules: [ // rules/loaders (do this shit to our code before compiling)
            { // backwards compatibility for es6
                use: 'babel-loader', // tell webpack to use babel (**presets found in .babelrc file**)
                test: /\.js$/ // regex to find all .js files and apply babel        
            },
            // { // recognize and use css
            //     use: ['style-loader', 'css-loader'], //order matters here, use rules are applied from RIGHT to LEFT
            //     test: /\.css$/ // do it to all da css found
            // },
            { // css to seperate file
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 90000 //if larger than 100 kilobyes
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css') // file to be generated by ExtractTextPlugin
    ]
};

module.exports = config;