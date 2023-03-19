import * as React from 'react';
import './style.css';
import Todo from './todo/todo';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      {/* <AppNavbar></AppNavbar> */}
      <div className="container mt-5">
        <Todo></Todo>
      </div>
    </div>
  );
}
