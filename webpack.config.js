const path = require('path');

module.exports = {
  mode: 'production',
  entry: './components/app.js',
  output: {
    path: path.resolve(__dirname, './public/dist'), // <- Updated
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }
};
