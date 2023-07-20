import axios from "axios";

/**
 * baseURL 속에 있는 server address를 quoteapi 정의 
 * @param {string} baseURL request 보내고, response 받아오는 server address
 * @param {object} headers 요청을 보내는데 있어 필요한 api key를 가지고 있는 객체 
 */
const quoteapi = axios.create({
  baseURL: "https://api.api-ninjas.com/v1/quotes?category=intelligence",
  headers: { "X-Api-Key": "gmZxady+6/Z4J/9StXKYzw==GM3yOnDppVvNXVnm" },
});

/**
 * 선언된 api로 loginPage의 quote를 가져오는 위해 get요청을 보내는 함수  
 * @param {string} res quoteapi에서 받아온 response 
 * @return {array} res:response 안에 있는 data를 반환  
 */
const getquote = async () => {
  const res = await quoteapi.get();
  return res.data;
};

/**
 * axios.create으로 baseURL을 key로 server address를 value로 가지고 있는 객체 생성하며 api로 정의
 * @param {string} baseURL request 보내고, response 받아오는 server address
 */
const api = axios.create({
  baseURL: "https://dailytodo.store/api/todo",
});

/**
 * 선언된 api로 "/incom"으로 get요청을 보내 미완료 todo를 불러오는 함수  
 * @param {string} res api에서 "/incom" 경로에서 받아온 response 
 * @return {array} res:response 안에 있는 data를 반환  
 */
const getTodo = async () => {
  const res = await api.get("/incom");
  return res.data;
};

/**
 * 선언된 api로 "/com"으로 get요청을 보내 완료 todo를 불러오는 함수  
 * @param {string} res api에서 "/com" 경로에서 받아온 response 
 * @return {array} res:response 안에 있는 data를 반환  
 */
const getComTodo = async () => {
  const res = await api.get("/com");
  return res.data;
};

/**
 * 선언된 api로 생성된 newTodo를 가지고 post요청을 보내는 함수  
 * @param {object} newTodo 생성되는 새로운 todo 
 */
const addTodo = async (newTodo) => {
  await api.post("/", newTodo);
};

/**
 * 선언된 api로 update 시킬 내용들을 가지고 patch요청을 보내는 함수
 * @param {number} id 선택된 todo의 id
 * @param {string} title 수정된 title
 * @param {string} content 수정된 content
 */
const editTodo = async ({ id, title, content }) => {
  await api.patch(`/incom/${id}`, { title, content });
};

/**
 * 선언된 api로 delete 될 todo의 postId를 가지고 delete요청을 보내는 함수  
 * @param {number} postId 선택된 todo의 id 
 */
const deleteTodo = async (postId) => {
  await api.delete(`/${postId}`);
};

/**
 * 선언된 api로 변경되는 todo의 id, isDone 값을 가지고 patch요청을 보내는 함수 , 미완료 -> 완료
 * @param {number} id 선택된 todo의 id 
 * @param {boolean} isDone 선택된 todo의 isDone 상태 
 */
const toggleTodo = async ({ id, isDone }) => {
  await api.patch(`/${id}`, isDone);
};

/**
 * 선언된 api로 변경되는 todo의 id, isDone 값을 가지고 patch요청을 보내는 함수, 완료 -> 미완료 
 * @param {number} id 선택된 todo의 id 
 * @param {boolean} isDone 선택된 todo의 isDone 상태 
 */
const completeUndoTodo = async ({ id, isDone }) => {
  await api.patch(`/cancellation/${id}`, isDone);
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
