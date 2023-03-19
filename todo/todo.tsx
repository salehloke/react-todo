import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import styles from './todo.module.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
/* eslint-disable-next-line */
export interface TodoProps {}

export function Todo(props: TodoProps) {
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Study HTML', completed: true },
    { id: 2, text: 'Study React', completed: true },
    { id: 3, text: 'Study React Hooks', completed: true },
    { id: 5, text: 'Study React Bootstrap', completed: true },
    { id: 4, text: 'Study React Router', completed: false },
    { id: 6, text: 'Study React Redux', completed: false },
    { id: 7, text: 'Study React Redux Toolkit', completed: false },
    { id: 8, text: 'Study React Redux Saga', completed: false },
    { id: 9, text: 'Study React Redux Observable', completed: false },
    { id: 10, text: 'Study React Redux Thunk', completed: false },
  ]);

  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodoObj = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoObj]);
    setNewTodo('');
    event.currentTarget.reset();
  };

  const handleCompleteTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <div className="container">
        <h1>Todo!</h1>

        <form onSubmit={handleAddTodo}>
          <input
            className="form-control"
            type="text"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
          />
          <Button className="mt-2 float-right" variant="primary" type="submit">
            {' '}
            Add
          </Button>
        </form>
        <ul className="list-group mt-5">
          {todos.map((todo) => (
            // todo item here
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCompleteTodo(todo.id)}
              />
              <span>{todo.text}</span>
              <Button
                variant="danger"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </Button>
            </li>
            // end of todo item here
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
