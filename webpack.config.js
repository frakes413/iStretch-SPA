module.exports = {
  entry: './client/app.jsx',
  output: './build/bundle.js',
  mode: 'production',
  rules: [
    {
      test: /\.js?x/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }
  ]
};