module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
  	preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: __dirname + '/assets',
        exclude: /bundle\.js$/
      }
    ],
    loaders: [
      {
     	test: /\.jsx$|\.js$/,
     	loader: 'babel-loader',
     	exclude: /node_modules/
      }
    ]
  }
};		