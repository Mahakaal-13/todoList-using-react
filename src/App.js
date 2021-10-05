import './App.css';
import Header from "./Components/Header";
import Form from "./Components/Form";
import Todolist from "./Components/Todolist";
import React, { useState } from 'react'




function App() {


  const [text, setText] = useState("")

  const [todo, setTodo] = useState([])

  // const saveMyTodo = (text) => {
  //   let  todos = [...todo, {text:text,completed:false,id:Math.random()*1000}];
  //   setTodo(todos)
  //   // console.log(todos)
  //   // console.log(todo.map((e,i) => <div key = {i}>{e}</div>))
  // }
 
  // const deleteMyTodo = (todos) => {
  //   console.log('delete',todo)
  //   setTodo(todos.filter((e) => e !== todos.id ));
  // }
  
  return (
    <>
      <Header title="Todo" />
      <div className="container">
      {/* <Form setTodo={(n) => saveMyTodo(n)}  */}
        <Form setTodo={setTodo} todo={todo} setText={setText} text={text}/>
      </div>
      <Todolist todo={todo} setTodo={setTodo}/>
      {/* {todo.map((e,i) => <div key = {i}>{e}</div>)} */}
    </>
  );
}

export default App;
