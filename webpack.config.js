const path = require('path'); // get the system absolute path

const config = {
    entry: './src/index.js', // tell webpack where our entry point is
    output: { // big ol' bundled script file to be generated
        path: path.resolve(__dirname, 'build'), //this must an ABSOLUTE path from file system root
        //path.resolve() helps get the right path independent of OS
        // arg 1, __dirname, is a reference to the current working directory
        // arg 2, 'build', is the name of the new output directory to be created
        filename: 'bundle.js' // name of concatinated output file
    },
    module: {
        rules: [ // rules/loaders (do this shit to our code before compiling)
            {
                use: 'babel-loader', // tell webpack to use babel (**presets found in .babelrc file**)
                test: /\.js$/ // regex to find all .js files and apply babel        
            }
        ]
    }
};

module.exports = config;