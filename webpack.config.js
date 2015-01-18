/**
 * Modules
 */
// var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");

/**
 * Plugin Arrays
 */
// var pluginsDev = [];
// var pluginsStage = [];
// var pluginsProd = [
//   new UglifyJsPlugin()
// ];

/**
 * Plugin Picker
 * returns an array of plugins depending on the NODE_ENV
 */
var plugins = function () {
  return [];
  // var env = process.env.NODE_ENV;
  // var plugin;

  // switch (env) {
  //   case 'development':
  //     plugin = pluginsDev;
  //   break;
  //   case 'staging':
  //     plugin = pluginsStage;
  //   break;
  //   case 'production':
  //     plugin = pluginsProd;
  //   break;
  //   default:
  //     plugin = pluginsDev;
  //   break;
  // }
  // return plugin;
};

/**
 * Webpack Config
 */
module.exports = {
  target: "web",
  debug: false,
  profile: false,
  watch: false,
  cache: true,
  quiet: false,
  noInfo: false,
  context: __dirname + "/assets/js",
  entry: {
    main: "./main"
  },
  output: {
    path: __dirname + "/public/assets",
    filename: "[name].js"
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader?harmony" }
    ]
  },
  resolve: {
        extensions: ["", ".jsx", ".js"]
  },
  plugins: plugins(),
  externals: {
    react: "React"
  },
  bail: process.env.NODE_ENV === "development" ? false : true
};