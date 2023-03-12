import React, { useState } from 'react'
import '../styles/App.css';

function App() {
  const ToDo=(id, createdAt)=>{
    return (
      <tr Key={id}>
        <td>
          <p>{id} Hey</p>
        </td>
        <td>
          <input />
        </td>
        <td>
          <p>{createdAt}</p>
        </td>
      </tr>
    );
  }
  const reverseTodos = () => {
    setTodos([...todos].reverse());
  };
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "20:30"
    },
    {
      id: "todo2",
      createdAt: "18:00"
    }
  ]);

  return (
    <div id="main">
      <button onClick={reverseTodos}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo) => {
            ToDo(todo.id, todo.createdAt);
            console.log(todo);
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
