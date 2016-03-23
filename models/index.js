var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'root', '4Plants44!', {
  host: 'localhost',
  dialect: 'mariadb',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

var models = [
    'User'
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

module.exports.sequelize = sequelize;
