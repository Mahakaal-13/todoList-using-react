import React from 'react'

export default function Singletodo(props) {

    const deleteHandler = () => {
        if (window.confirm("are you sure to delete this item?")) {
            props.setTodo(props.todo.filter(e => e.id !== props.singletodo.id))
            console.log(props.singletodo)
            props.showAlart("Item Delete Successfull", "success")
        }
    }
    const checkHandler = () => {
        props.setTodo(props.todo.map(item => {
            if (item.id === props.singletodo.id) {
                return { ...item, completed: !item.completed }

            }
            return item;
        }))
    }

    let myLiStyle = {
        width: "30rem",
        display: "flex",
        justifyContent: "space-between"

    }
    return (
        <div className="singletodo d-flex mb-2">
            <li className={`list-group-item ${props.singletodo.completed ? "completed" : ""}`} style={myLiStyle}>{props.text}
                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" onClick={checkHandler} /> 
            </li>
            <button type="button" class="btn btn-danger ms-1" onClick={deleteHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>
</svg>
              </button>

        </div>
    )
}
