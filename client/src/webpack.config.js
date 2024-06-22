// const path = require('path');

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[name].[ext]',
//               outputPath: 'images',
//               publicPath: 'images',
              
//             }
//           }
//         ]
//       }
//     ]
//   }
// }

const path = require('path');

module.exports = {
  // other webpack configurations...
  externals: {
    crypto: '{}',
    util: '{}',
    stream: '{}',
  },
};