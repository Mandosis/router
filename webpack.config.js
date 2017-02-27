const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin')
const path = require('path')

function root (args) {
    args = Array.prototype.slice.call(arguments, 0)
    return path.join.apply(path, [__dirname].concat(args))
}

module.exports = [
// Minified Browser
{
    context: __dirname,
    target: 'web',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, exclude: /node_modules/, loaders: ['babel-loader?presets[]=env', 'ts-loader'] }
        ]
    },
    entry: {
        router: root('src/router.ts')
    },
    output: {
        publicPath: path.resolve(__dirname),
        filename: '[name].min.js',
        sourceMapFilename: '[name].min.js.map',
        path: root('lib/browser'),
        library: 'Router'
    },
    plugins: [
        new UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true,
                warnings: false
            },
            comments: false,
            sourceMap: true
        })
    ],
    node: {
        global: true,
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false
    }
    
},
// Non minified browser
{
    context: __dirname,
    target: 'web',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, exclude: /node_modules/, loaders: ['babel-loader?presets[]=env', 'ts-loader'] }
        ]
    },
    entry: {
        router: root('src/router.ts')
    },
    output: {
        publicPath: path.resolve(__dirname),
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        path: root('lib/browser'),
        library: 'Router'
    },
    plugins: [],
    node: {
        global: true,
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false
    }
}]