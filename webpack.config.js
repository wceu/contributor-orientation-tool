var path = require('path'); // Path dependency
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

// Get mode - https://webpack.js.org/concepts/mode/
module.exports = (env, argv) => {

  let inProduction = argv.mode === 'production';

  let config = {
    entry: {
      shortcode: [
        './src/src/WPCOTool/assets/js/main.js',
        './src/src/WPCOTool/assets/scss/style.scss',
      ],
    },
    output : {
      path: path.resolve(__dirname, './dist/contributor-orientation-tool'),
      filename: 'src/WPCOTool/assets/js/[name].js',
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader", options: {
                sourceMap: true,
              },
            }, {
              loader: "sass-loader", options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader", "eslint-loader"],
        },
      ],
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: inProduction ? false : true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new StyleLintPlugin({
        files: './src/src/WPCOTool/assets/scss/**/*.scss',
        configFile: './.stylelintrc',
      }),
      new MiniCssExtractPlugin({
        fallback: 'style-loader',
        filename: 'src/WPCOTool/assets/css/[name].css',
      }),
      new CopyPlugin([
        {
          from: 'src/',
          to: '../contributor-orientation-tool',
          ignore: ['*.js', '*.scss', '*.png', '*.jpe?g', '*.JPE?G', '*.gif', '*.svg'],
        },
      ]),
    ],
    devtool: "source-map",
  };

  return config;

};
