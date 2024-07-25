const express = require("express");

const { getTodos, getTodoById, createTodo,updateTodo,deleteTodo } = require("../controllers/todo")

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.get("/:id", getTodoById);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);



module.exports = router