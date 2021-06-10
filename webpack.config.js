const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

console.log(" ## path ##")
console.log(__dirname+'/index.html')
const htmlPlugin = new HtmlWebPackPlugin({
  // path to build index.html in /build
  template: '/index.html',
  // filename: './index.html'
})

module.exports = {
  mode: 'development',
  entry: ['./index.js'],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|browser_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    // console.log(__dirname),
    contentBase: path.resolve(__dirname, '/dist'),
    compress: true,
    port: 8080,
  }
}