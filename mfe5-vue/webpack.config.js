const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  mode: "development",
  cache: false,
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    publicPath: "http://localhost:4205/",
  },
  resolve: {
    extensions: [".vue", ".jsx", ".js", ".json"],
    alias: {
      // this isn't technically needed, since the default `vue` entry for bundlers
      // is a simple `export * from '@vue/runtime-dom`. However having this
      // extra re-export somehow causes webpack to always invalidate the module
      // on the first HMR update and causes the page to reload.
      vue: "@vue/runtime-dom",
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: "url-loader",
          options: { limit: 8192 },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mfe5",
      filename: "remoteEntry.js",
      exposes: {
        "./web-components": "./src/main.js",
      },
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      cache: false
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: 4205,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
};
