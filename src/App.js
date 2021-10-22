import './App.css';
import Header from "./Components/Header";
import Form from "./Components/Form";
import Todolist from "./Components/Todolist";
import Alart from './Components/Alart'
import React, { useState,useEffect } from 'react'




function App() {


  const [text, setText] = useState("")

  const [todo, setTodo] = useState([])

  const [alart, setAlart] = useState(null)

  const [mode, setMode] = useState("light")

  const [status, setStatus] = useState("all")

  const [filterTodo, setFilterTodo] = useState([])

  


 

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  const showAlart = (text,type) =>{
    setAlart({
      text : text,
      type : type 
    })
    setTimeout(() => {
      setAlart(null)
    }, 1000);
  }

  const filterHandler = () => {
    switch (status) {
      case "completed": setFilterTodo(todo.filter(todo => todo.completed === true));
        break;

        case "uncompleted": setFilterTodo(todo.filter(todo => todo.completed === false));
        break;
    
      default: setFilterTodo(todo);
        break;
    }
  }

  useEffect(() => {
    filterHandler()
  }, [todo,status])

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
      <Header title="Todo" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      {/* <Form setTodo={(n) => saveMyTodo(n)}  */}
        <Form setTodo={setTodo} todo={todo} setText={setText} text={text} setStatus={setStatus} />
      </div>
      <Alart alart={alart}/>
      <Todolist todo={todo} setTodo={setTodo} showAlart={showAlart} mode={mode}  text ={text} filterTodo={filterTodo}/>
      {/* {todo.map((e,i) => <div key = {i}>{e}</div>)} */}
    </>
  );
}

export default App;
