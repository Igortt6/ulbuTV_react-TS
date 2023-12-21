import Card, { CardVariant } from "./components/Card";
import EventExample from "./components/EventExample";
import TodosPage from "./components/TodosPage";
import UserPage from "./components/UserPage";

function App() {


  return (
    <div>
      <EventExample />
      <Card variant={CardVariant.primary} height="200px" width="200px">
        <button>asdas</button>
      </Card>
      <UserPage />
      <TodosPage />

    </div>
  );
}

export default App
