const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.student);
    }
  };
  School.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'school',
  });
  
  return School;
};