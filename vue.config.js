module.exports = {
  publicPath: './',
  transpileDependencies: [
    'vuetify',
    'resize-detector'
  ],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    devtool: 'source-map'
  },
  runtimeCompiler: true
  // devServer: {
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   }
  // }
}
