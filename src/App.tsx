import { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventExample from "./components/EventExample";

function App() {

  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      alert(error)
    }
  };

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10");
      setTodos(response.data);
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <EventExample />
      <Card variant={CardVariant.primary} height="200px" width="200px">
        <button>asdas</button>
      </Card>
      <List
        items={users}
        renderItems={(user: IUser) => <UserItem user={user} key={user.id} />} />

      <List
        items={todos}
        renderItems={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />

    </div>
  );
}

export default App
