const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.school);
    }
  };
  Student.init({
    name: DataTypes.STRING,
    rollNo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student',
  });
  return Student;
};