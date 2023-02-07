import "./App.css";
import { Categories } from "./components/categories/Categories";
import { Header } from "./components/header/Header";
import { Submit } from "./components/submit/Submit";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Submit />
    </div>
  );
}

export default App;
