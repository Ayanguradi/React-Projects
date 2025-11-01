// ---------React font library----------
import { useContext } from "react";
import { MdAutoDelete } from "react-icons/md";
import {TodoAppContext} from "../Context/TodoContext"

export function TodoItems({ deleteItem }) {
  const items=useContext(TodoAppContext)
  const handleDeleteItem = (item) => deleteItem(item);
  return (
    <div>
      {items.map((item, index) => (
        <div className="row justify-content-center my-3" key={index}>
          <div className="col-4 ">
            <p className="w-100 p-2">{item.task}</p>
          </div>
          <div className="col-3 ">
            <p className="w-100 p-2">{item["date"]}</p>
          </div>
          <div className="col-2">
            <button
              type="button"
              key={item.task}
              onClick={() => (handleDeleteItem(item.task))}
              className="btn btn-danger max-width p-2"
            >
              <MdAutoDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
