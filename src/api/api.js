import axios from "axios";

const api = axios.create({
  baseURL: "https://dailytodo.store/api/todo",
  // baseURL: "http://localhost:3001",
});

const quoteapi = axios.create({
  baseURL: "https://api.api-ninjas.com/v1/quotes?category=intelligence",
  headers: { "X-Api-Key": "gmZxady+6/Z4J/9StXKYzw==GM3yOnDppVvNXVnm" },
});
const getquote = async () => {
  const res = await quoteapi.get();
  return res.data;
};

const getTodo = async () => {
  const res = await api.get("/incom");
  // const res = await api.get("/todos");
  return res.data;
};

const getComTodo = async () => {
  const res = await api.get("/com");
  // const res = await api.get("/todos");
  return res.data;
};

const addTodo = async (newTodo) => {
  // console.log("addTodo", newTodo);
  await api.post("/", newTodo);
  // return await api.post("/todos", newTodo);
};

const editTodo = async ({ id, title, content }) => {
  // console.log("editTodo", id, title, content);
  await api.patch(`/incom/${id}`, { title, content });
  // await api.put(`/todos/${id}`, updatedTodo);
};

const deleteTodo = async (postId) => {
  console.log("id", postId);
  return api.delete(`/${postId}`);
  // return api.delete(`/todos/${postId}`);
};

const toggleTodo = async ({ id, isDone }) => {
  console.log("toggole", id, isDone);
  const res = await api.patch(`/${id}`, isDone);
  // const res = await api.patch(`/todos/${postId}`);
  return res.data;
};

const completeUndoTodo = async ({ id, isDone }) => {
  return api.patch(`/cancellation/${id}`, isDone);
  // return api.delete(`/todos/${postId}`);
};

export {
  api,
  getTodo,
  getComTodo,
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
  completeUndoTodo,
  getquote,
};
