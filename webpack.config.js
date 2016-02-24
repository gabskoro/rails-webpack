const path = require('path');

const PATHS = {
    src: path.join(__dirname, 'app/assets/javascripts'),
    dist: path.join(__dirname, 'public/assets')
};

module.exports = {
    entry: PATHS.src,
    output: {
        path: PATHS.dist,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};
