const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = {
  mode: "development",
  entry: './entry.ts',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js',
    libraryTarget: 'var',
    library: 'LIB'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
  plugins: [
    new EsmWebpackPlugin()
  ]
}
