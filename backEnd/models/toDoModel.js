const { DataTypes } = require("sequelize");
const database = require("../config/database");

const ToDo = database.define(
  "toDo", /// table name
  {
    ////////// columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    taskName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    taskStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    taskDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    taskPriority: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    taskDesc: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    ////// if we need to add timestamps
    timestamps: true,
  }
);
module.exports = ToDo;
