import React from 'react';
import '../styles/AddTask.css';

const AddTask = (props) => {
    return(
        <div className="addTask">
            <span><b>Add a new todo</b> ( press Enter to add ):</span>
            <input type="text"/>
        </div>
    );
};

export default AddTask;