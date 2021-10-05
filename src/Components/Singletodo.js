import React from 'react'

export default function Singletodo(props) {

    const deleteHandler = ()=>{
        props.setTodo(props.todo.filter(e => e.id !== props.singletodo.id))
        console.log(props.singletodo)
    }
    const checkHandler = () =>{
       props.setTodo(props.todo.map(item => {
           if (item.id === props.singletodo.id) {
               return {...item, completed: !item.completed}
               
           }
           return item;
       }))
    }
    
    let myLiStyle={
        width: "30rem",
        display: "flex",
        justifyContent: "space-between"
    
    }
    return (
        <div className="singletodo d-flex mb-2">
            <li className={`list-group-item ${props.singletodo.completed? "completed":""}`} style={myLiStyle}></li>
            <button className="btn btn-sm btn-success "onClick={checkHandler}>Checked</button>
            <button className="btn btn-sm btn-danger ms-1" onClick={deleteHandler}>Delete</button>
            
        </div>
    )
}
