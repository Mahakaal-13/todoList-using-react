import React,{useState} from 'react'



export default function Singletodo(props) {


    const [editText, setEditText] = useState(props.text)

    const deleteHandler = () => {
        if (window.confirm("are you sure to delete this item?")) {
            props.setTodo(props.todo.filter(e => e.id !== props.singletodo.id))
            console.log(props.singletodo)
            props.showAlart("Item Delete Successfull", "success")
        }
    }

    const editHandler = () => {
        props.setTodo(props.todo.map(e => {
            if (e.id === props.singletodo.id) {
                return {...e, editItem : !e.editItem}
                
            }
            return e;
        }))
        
    }
    const checkHandler = () => {
        props.setTodo(props.todo.map(item => {
            if (item.id === props.singletodo.id) {
                return { ...item, completed: !item.completed }

            }
            return item;
        }))
    }

    const onChangeHandler = (e) =>{
        setEditText(e.target.value)
    }

    const updateHandler = (e) =>{
        e.preventDefault();
        if (!editText) {
            alert("text area can not be blanked")
        }
        else {
            props.setTodo((props.todo.map(e => {
                if (e.id === props.singletodo.id) {
                    return {...e, editItem : !e.editItem , text:editText}
                    
                }
                return e;
            })))
        }
    }

    

    return (

       
       <>
       
            <div className="singletodo d-flex mb-2">
                <li className={`list-group-item ${props.singletodo.completed ? "completed" : ""} d-flex myLiStyle`}> <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckIndeterminate" onClick={checkHandler} />
                    {props.editItem ? <input className ="myLiStyle1"value={editText} onChange={onChangeHandler} /> : <div>{props.text}</div>}
                </li>
               {props.editItem ? (<button type="button" class="btn btn-success ms-1"  onClick={updateHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"></path>
</svg>
              </button>):( <button type="button" className="btn btn-secondary ms-1" onClick={editHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"></path>
                    </svg>
                </button>)}
                <button type="button" className="btn btn-danger ms-1" onClick={deleteHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>
                    </svg>
                </button>
            </div>
           
            </>
    )
}
