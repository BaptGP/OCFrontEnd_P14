import "./App.css";
import FormCreate from "./components/CreateEmployee/FormCreate";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="App">
      <FormCreate />
      <div className="px-8">
        <Table />
      </div>
    </div>
  );
}

export default App;
