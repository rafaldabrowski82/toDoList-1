import React from 'react';
import '../styles/AddTask.css';

const AddTask = (props) => {
    return(
        <div className="addTask">
            <span>Add a new todo </span><span>( press Enter to add ):</span>
            <form onSubmit={props.submit}>
                <input type="text" placeholder="enter the task..." value={props.value} onChange={(e) => props.change(e)}/>
            </form>
        </div>
    );
};

export default AddTask;