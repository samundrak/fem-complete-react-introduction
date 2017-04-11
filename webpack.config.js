const path = require('path');

console.log(__dirname)
module.exports = {
    context: __dirname,
    entry: path.resolve(__dirname, 'src/app.js'),
    devtool: 'eval',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app.js',
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extenstions: ['', '.js']
    },
    stats: {
        color: true,
        reasonse: true,
        chunkd: true,
    },
    devServer: {
        publicPath: '/public/'
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader: 'eslint-loader',
        }],
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
                // plugins: ['transform-runtime'],
            },
        }, ]
    },
}