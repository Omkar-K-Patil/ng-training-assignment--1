const toDoModel = require("../models/toDoModel");
const database = require("../config/database");

const allList = async (req, res) => {
  try {
    const tasks = await toDoModel.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).send("Internal Server Error");
  }
};

const findTask = async (req, res) => {
  try {
    const id = req.body.data;
    const task = await toDoModel.findOne({
      where: { id: id }, // Find the task where the id matches
    });
    res.status(200).json(task);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).send("Internal Server Error");
  }
};

const saveTask = async (req, res) => {
  console.log(req.body);
  try {
    await database.sync();
    const newTask = await toDoModel.create(req.body.data);
    // console.log("Task created:", newTask.toJSON());
  } catch (error) {
    console.error("Error saving task:", error);
  }
  res.json({ status: true });
};

const updateTask = async (req, res) => {
  try {
    const updatedData = req.body.data;
    const id = req.body.id;
    const updatedTask = await toDoModel.update(updatedData, {
      where: { id: id },
    });
    if (updatedTask[0] === 1) {
      console.log("Task updated successfully");
    } else {
      console.log("No task found with the provided id");
    }
  } catch (error) {
    console.error("Error updating task:", error);
  }
  res.json({ status: true });
};

const deleteTask = async (req, res) => {
  try {
    const id = req.body.data;
    const deletedTask = await toDoModel.destroy({
      where: { id: id },
    });

    if (deletedTask) {
      res.json({ status: true });
    } else {
      res.json({ status: false });
    }

    res.json({ status: true });
  } catch (error) {
    console.error("Error delete task:", error);
  }
};

module.exports = { saveTask, updateTask, deleteTask, allList, findTask };
