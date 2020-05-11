import React, {useState} from 'react';

const TaskDisplay = (props) => {
    const [task, setTask] = useState({
        theTask: props.oneTask.theTask,
        isComplete: props.oneTask.isComplete,
        isDeleted: props.oneTask.isDeleted
    })

    const handleClick = (e) => {
        setTask({
            ...task,
            isComplete: !task.isComplete,
        });
    }

    const handleDelete = (e) => {
        setTask({
            ...task,
            isDeleted: true
        })
    }

    return (
        <div>
            {task.isDeleted?
                "" : 
                <div className="row p-2">
                    <input type="checkbox" onClick={ handleClick } />
                    <div style={task.isComplete?{textDecoration: "line-through"}:{}} className="col-8 text-left">{task.theTask}</div>
                    <button onClick={ handleDelete } className="btn btn-outline-secondary btn-sm">Delete</button>
                </div>
            }
        </div>
    )
};

export default TaskDisplay;

// // *****************************************************************
// // *                    Alternative Approach                       *
// // *     Use with Alternative Approach in App.js & TaskForm.js     *
// // *****************************************************************

// import React, {useState} from 'react';

// const TaskDisplay = (props) => {
//     const {task, index, list, setList} = props;
//     const handleDelete = () => {
//         setList(() => {
//             return list.filter(task => list.indexOf(task) !== index);
//         });
//     };
//     const handleChange = () => {
//         list[index].isComplete = !list[index].isComplete;
//         setList([...list]);
//     };
//     return (
//         <div>
//             <div className="row pl-4 py-2">
//                 <input type="checkbox" onChange={ handleChange } checked={task.isComplete}/>
//                 <div style={task.isComplete?{textDecoration: "line-through"}:{}} className="col-7 text-left">{task.name}</div>
//                 <button onClick={ handleDelete } className="btn btn-outline-secondary btn-sm">Delete</button>
//             </div>
//         </div>
//     )
// };
// export default TaskDisplay;