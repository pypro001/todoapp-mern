import axios from "axios";
import {
  todoAppConstant
} from "../constants/todosConstant";

//gets all todos
export const getAllTodos = async (dispatch) => {
  dispatch({ type: todoAppConstant.GET_TODOS_REQUEST });

  try {
    const res = await axios.get("http://127.0.0.1:4042/api/v1/todos-all");
    dispatch({ type: todoAppConstant.GET_TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: todoAppConstant.GET_TODOS_FAILURE, payload: error });
  }
};

// create  todo
export const createTodo = (payload) => async (dispatch) => {
  dispatch({ type: todoAppConstant.POST_TODOS_REQUEST });
  try {
    const res = await axios.post("http://127.0.0.1:4042/api/v1/todo/new", payload);
    console.log(res);
    dispatch({ type: todoAppConstant.POST_TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: todoAppConstant.POST_TODOS_FAILURE, payload: error });
  }
};

// update todo
export const updateTodo = (payload) => async (dispatch) => {
  dispatch({ type: todoAppConstant.UPDATE_TODOS_REQUEST });
  try {
    const res = await axios.put("http://127.0.0.1:4042/api/v1/todo/"+ payload.todoId, payload);

    dispatch({ type: todoAppConstant.UPDATE_TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: todoAppConstant.UPDATE_TODOS_FAILURE, payload: error });
  }
};

//delete todo
export const deleteTodo = (payload) => async (dispatch) => {
  dispatch({ type: todoAppConstant.DELETE_TODOS_REQUEST });

  try {
    const res = await axios.delete("http://127.0.0.1:4042/api/v1/todo/" + payload.todoId);
    dispatch({ type: todoAppConstant.DELETE_TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: todoAppConstant.DELETE_TODOS_FAILURE, payload: error });
  }
};