require("@babel/polyfill")

require("@babel/register")

// require("./src/server")


var WebpackIsomorphicTools = require('webpack-isomorphic-tools')
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./webpack/webpack-isomorphic-config'))
    // .development(__DEVELOPMENT__)
    .server('/dist')
    .then(() => {
      require('./src/server')
    })