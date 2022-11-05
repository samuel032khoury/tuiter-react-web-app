import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState({do: ''});
  const dispatch = useDispatch();
  const createTodoClickHandler = () => {
    dispatch(addTodo(todo))
  }
  const deleteTodoClickHandler = (index) => {
    dispatch(deleteTodo(index))
  }
  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue
    };
    setTodo(newTodo);
  }

  function toggleTodoDone(todo) {
    dispatch((todoDoneToggle(todo)))
  }

  return (
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        <li className="list-group-item">

          <div className={"row"}>

            <div className={"col-10 col-xl-11"}>
              <input
                onChange={todoChangeHandler}
                value={todo.do}
                className="form-control"/>
            </div>
            <div className={"col-2 col-xl-1"}>
              <button onClick={createTodoClickHandler} className={"btn btn-primary"}>
                Create
              </button>
            </div>
          </div>


        </li>
        {
          todos.map((todo, index) =>
            <li className="list-group-item">
              <div className={"row"}>
                <div className={"col-1"}>
                  <input type="checkbox"
                         checked={todo.done}
                         onChange={() =>
                           toggleTodoDone(todo)}
                         className="me-2"/>
                </div>
                <div className={"col-9 col-xl-10"}>{todo.do}</div>
                <div className={"col-2 col-xl-1"}>
                  <button onClick={() =>
                    deleteTodoClickHandler(index)}
                          className="btn btn-danger">
                    Delete
                  </button>

                </div>
              </div>

            </li>
          )
        }
      </ul>
    </>
  );
};
export default Todos;