import "./App.css";
import Todo from "./components/Todo";
import App1 from "./App1";
import Counter from "./components/Counter";
import Button from "./components/Button";
import Search from "./components/Search";

function App() {
  const todos = [
    { id: 1, title: "Wash laundry", completed: true },
    { id: 2, title: "Do homework", completed: true },
    { id: 3, title: "Eat dinner", completed: false },
    { id: 4, title: "Fall asleep", completed: false },
  ];

  return (
    <div className="App">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}

      <Counter />
      <Button />
      <Search />
      <App1 />
    </div>
  );
}

export default App;
