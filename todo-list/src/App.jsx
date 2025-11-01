// ----------external style sheet----------
import "./App.css";
// --------Bootstrap-----------------
import "bootstrap/dist/css/bootstrap.min.css";

import { AppName } from "./components/AppName";
import { AddTodo } from "./components/AddTodo";
import { TodoItems } from "./components/TodoItems";
import { IsEmpty } from "./components/ErrorMsg";
import { TodoAppContext } from "./Context/TodoContext";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([
    { task: "Goto College", date: "20/10/25" },
    { task: "Submit Synopsis", date: "20/10/25" },
  ]);

  const handleSetItems = (taskName, dueDate) =>
    setItems((preItems) => [{ task: taskName, date: dueDate }, ...preItems]);

  const deleteItem = (itemToDelete) => {
    const updatedItems = items.filter((eachItem) => itemToDelete !== eachItem.task);
    setItems(updatedItems);
  };

  return (
    <TodoAppContext.Provider value={items} >
    <div className="container ">
      <AppName></AppName>
      <AddTodo handleSetItems={handleSetItems}></AddTodo>
      {items.length == 0 ? (
        <IsEmpty></IsEmpty>
      ) : (
        <TodoItems deleteItem={deleteItem}></TodoItems>
      )}
    </div>
    </TodoAppContext.Provider>
  );
}
export default App;
