const express = require("express");
const toDoController = require("../controllers/toDoController");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.post("/findTask", toDoController.findTask);
router.get("/allList", toDoController.allList);
router.post("/saveTask", toDoController.saveTask);
router.post("/updateTask", toDoController.updateTask);
router.post("/deleteTask", toDoController.deleteTask);

module.exports = router;
