const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// use only webpack in build
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, 'tsconfig.json'),
      }),
    ],
  },
  output: {
    filename: 'server.js',
    path: path.join(__dirname, 'build'),
  },
  plugins: [new CleanWebpackPlugin()],
  // node_modules 에 있는 것들은 하나의 파일로 묶지 않는다. -> node_modules에서 읽어오게끔
  externals: [nodeExternals()],
};
