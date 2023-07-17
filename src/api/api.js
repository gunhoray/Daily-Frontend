import axios from "axios";

const api = axios.create({
  baseURL: "http://13.124.230.223/api/todo",
});

const getTodo = async () => {
  const res = await axios.get("http://13.124.230.223/api/todo/incom");
  return res.data;
};

const addTodo = async (newTodo) => {
  await axios.post("http://13.124.230.223/api/todo", newTodo);
};

export { getTodo, addTodo, api };
