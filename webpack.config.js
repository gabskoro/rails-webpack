const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

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
    plugins: [
        new LiveReloadPlugin({
          appendScriptTag: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css?modules=true'
            }
        ]
    },
    resolve: {
        root: [
          path.join(__dirname, 'app', 'assets', 'javascripts'),
          path.join(__dirname, 'app', 'assets', 'stylesheets')
        ],
        modulesDirectories: [
          'node_modules'
        ]
    },
};
