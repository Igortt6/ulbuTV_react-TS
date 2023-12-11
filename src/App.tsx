import Card, { CardVariant } from "./components/Card";

function App() {
  return (
    <div>
      <Card variant={CardVariant.primary} height="200px" width="200px">
        <button>asdas</button>
      </Card>
    </div>
  );
}

export default App
