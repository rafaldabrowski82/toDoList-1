import React from 'react';
import '../styles/ShowTasks.css';

const ShowTasks = (props) => {
    const listOfTasks = props.list.map(task => <li key={task.id} onClick={() => props.delete(task.id)}>{task.value}</li>);
    return (
        <div className="showList">
            <>
                {listOfTasks.length > 0 ? <ul>{listOfTasks}</ul> : <p>Nie masz żadnych zadań do wykonania!</p>}
                {listOfTasks.length > 0 ? <p>Kliknij zadanie, aby je usunąć</p> : null}
            </>
        </div>
    );
};

export default ShowTasks;