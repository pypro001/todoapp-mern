const router = require("express").Router();
const { getAllTodos, createATodo,updateATodo, deleteATodo } = require("../controller/todos.controller.js");

router.get("/todos-all", getAllTodos);
router.post("/todo/new", createATodo);
router.put("/todo/:id", updateATodo);
router.delete("/todo/:id", deleteATodo);

module.exports = router;