

export default function Form(props) {




    let inputHandler = (e) => {
        props.setText(e.target.value)
    }

    let onClickHandler = (e) => {
        
        if (!props.text) {
            alert("text area can not be blanked")
        }
        else {
            props.setTodo([
                ...props.todo, { text: props.text, completed: false, editItem : false, id: Math.random() * 1000 }
            ])
            // console.log(text);
            props.setText("");
        }
    }

    const onclickHandler2 = (e) =>{
        props.setStatus(e.target.value)
    }

    const onKeyDownHandler = (e) => {
        if (e.key === "Enter") {
            onClickHandler()
        }
    }

    let boxStyle1 = {
        width: "40rem"
    }
    return (
        <div className="d-flex justify-content-center">

            <div className="input-group mb-3 my-3" style={boxStyle1}>
                <input type="text" value={props.text} onChange={inputHandler} onKeyDown={onKeyDownHandler}
                className="form-control" />
                <button className="btn btn-outline-success" type="button" onClick={onClickHandler} >Add</button>
            </div>
            <div className="select m-3">
                <select className="filter-todo" onChange={onclickHandler2}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>

        </div>
    )
}
