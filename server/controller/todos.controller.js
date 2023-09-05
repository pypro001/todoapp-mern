const Todo = require("../model/todo.model.js");

// get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      message: "Get all todos successfully.",
      todos: todos,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  create todo
exports.createATodo = async (req, res) => {
    const title = typeof req.body.title === "string" ? req.body.title.trim() : null;
    const des = typeof req.body.description === "string" ? req.body.description.trim() : null;
    console.log("i am here",req.body)
if (!title || !des) {
    // if any of these no provide
    res.status(500).json({
      message: "Please Add a title and description",
    });
    
} else {
  try{
    const newTodo = new Todo(req.body);
    console.log(newTodo);
    await newTodo.save();
        res.status(201).json({
          message: "Create a new todo successfully.",
        });
  }catch(err){
    res.status(500).json({
        message: err.message,
      });
    
  }
}
};


// update todo
exports.updateATodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findByIdAndUpdate(todoId, req.body, { new: true, runValidators: true });

    if (!todo) {
      return res.status(404).json({ msg: `No todo with id: ${todoId}` });
    } else {
      res.status(200).json({
        msg: `Todo with id: ${todoId} updated successfully.`,
        todo: todo,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete todo
exports.deleteATodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findByIdAndDelete(todoId);

    if (!todo) {
      return res.status(404).json({ msg: `No todo with id: ${todoId}` });
    } else {
      res.status(200).json({
        message: `Todo with id: ${todoId} deleted successfully.`,
        todo: todo,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};