if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}

// module.exports = {
//   github: 'fbcab56ccb34c2813bc2662adf949477f8cc73ba'
// };
