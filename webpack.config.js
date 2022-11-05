import UglifyJSPlugin from "uglifyjs-webpack-plugin";

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            pure_funcs: ["console.log"],
          },
          mangle: {
            reserved: ["console.log"],
          },
        },
      }),
    ],
  },
};
