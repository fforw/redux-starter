var path = require("path");
var fs = require("fs");
var webpack = require("webpack");

module.exports = {

    entry: {
        main: "./src/main.js"
    },
    output: {
        filename: "web/js/[name].js"
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options:
                    // load .babelrc config but change turn off import handling because webpack does that
                    // the .babelrc is used as-is for the tests (for which it is converted to commonjs)
                    (function ()
                    {
                        var BabelConfig = JSON.parse(fs.readFileSync("./.babelrc", "UTF-8"));
                        BabelConfig.presets[0][1].modules = false;
                        // XXX: jsonified to escape warning "DeprecationWarning: loaderUtils.parseQuery() received a non-string value"
                        return JSON.stringify(BabelConfig);
                    })()
            }
        ]
    }
};
