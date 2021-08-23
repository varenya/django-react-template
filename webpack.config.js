const path = require("path");
module.exports = {
  entry: {
    polls: {
      import: "./polls/js/index.js",
      dependOn: "vendor",
    },
    vendor: "./static/vendor.js",
  },
  output: {
    path: path.resolve(__dirname, "static"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
