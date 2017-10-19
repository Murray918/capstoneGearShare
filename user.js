'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    bio: DataTypes.TEXT

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
      }
    }
  });
  return User;
};


// sequelize model:create --name User --attributes 'name:string email:string bio:text'
