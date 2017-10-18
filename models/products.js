'use strict';

module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
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



// sequelize model:create --name Product --attributes 'make:string modelNum:string info:text'
