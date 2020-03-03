import React from 'react';
import '../styles/ShowList.css';

const ShowList = (props) => {
    const listOfTasks = props.list.map(task => <li key={task.id}>{task.value}</li>);
    return(
        <div className="showList">
            {listOfTasks.length > 0 ? <ul>{listOfTasks}</ul> : <p>Nie masz żadnych zadań do wykonania!</p>}
        </div>
    );
};

export default ShowList;