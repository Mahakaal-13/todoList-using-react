import React from 'react'
import Singletodo from './Singletodo'

export default function Todolist(props) {

    let listStyle ={
        display:"flex",
        justifyContent: "center"
    }
    return (
        <div className="container"style={listStyle}>
            <ul className="list-group" >
            {/* <Singletodo todos={props.todos} setTodo={props.setTodo}/>  */}
            {props.todo.map((singletodo) =>(
                <Singletodo key={singletodo.id}text={singletodo.text} todo={props.todo} setTodo={props.setTodo} singletodo={singletodo} showAlart={props.showAlart} mode={props.mode}/>
            ))}
            </ul>
        </div>
    )
}
