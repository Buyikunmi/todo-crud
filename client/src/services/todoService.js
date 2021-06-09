import http from "./httpService";

const apiURL = `${window.location.origin}/api/todo`;

export async function getTodoItems() {
  const { data } = await http.get(apiURL);
  return data;
}

export async function addTodoItem(item) {
  const { data } = await http.post(apiURL, item);
  return data;
}

export async function editTodoItem(item) {
  const { data } = await http.put(apiURL, item);
  return data;
}

export async function deleteTodoItem(item) {
  const { data } = await http.delete(apiURL, { data: item });
  return data;
}
