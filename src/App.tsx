import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card, { CardVariant } from "./components/Card";
import EventExample from "./components/EventExample";
import TodosPage from "./components/TodosPage";
import UserPage from "./components/UserPage";
import { FC } from "react";
import UserItemPage from './components/UserItemPage';

const App: FC = () => {


  return (
    // <div>
    //   <EventExample />
    //   <Card variant={CardVariant.primary} height="200px" width="200px">
    //     <button>asdas</button>
    //   </Card>
    // </div>
    <Router  >
      <Link to="/users" >Users</Link>
      <Link style={{ marginLeft: 20 }} to="/todos">Todos</Link>

      <Routes  >
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </Router>

  );
}

export default App
