const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const reg = new RegExp('\\.js$', 'i')
const modelsPath = path.resolve('server/models');
// const modelsPath = path.join(__dirname, '../models');


mongoose.connect('mongodb://admin:ehdcks85@ds039125.mlab.com:39125/blog', {
  useNewUrlParser: true,
});


mongoose.connection.on('connected', () => console.log('MongDB connected'));

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
