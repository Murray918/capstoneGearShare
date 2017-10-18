'use strict';

module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('User', {
    make: DataTypes.STRING,
    modelNum: DataTypes.STRING,
    info: DataTypes.TEXT
    // tags: DataTypes.ARRAY(sequalize.text)

  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return Product;
};
