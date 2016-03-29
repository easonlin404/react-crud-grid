module.exports = {
    entry: {
        app: ["./src/entry.js"]
    },
    output: {
        path: "./build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { 
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: [ 'react']
                }}
        ]
    }

};
