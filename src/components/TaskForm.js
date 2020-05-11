import React, {useState} from 'react';

const TaskForm = (props) => {
    const [task, setTask] = useState({
        theTask: "",
        isComplete: false,
        isDeleted: false
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNewTask(task);
    }
    const handleChange = (e) => {
        setTask({
            ...task,
            theTask: e.target.value
        });
    }
    return (
        <form onSubmit={ handleSubmit } className="row text-center p-3">
            <input onChange={ handleChange } type="text" name="theTask" className="form-control col-6 m-1"/>
            <input type="submit" value="Add New Task" className="btn btn-outline-info col-3 m-1"/>
        </form>
    );
};

export default TaskForm;

// // *****************************************************************
// // *                    Alternative Approach                       *
// // *   Use with Alternative Approach in App.js & TaskDisplay.js    *
// // *****************************************************************
// import React, {useState} from 'react';
// const TaskForm = (props) => {
//     const { list, setList } = props;
//     let task = {
//         name: "",
//         isComplete: false
//     };
//     const handleChange = e => {
//         task.name = e.target.value;
//     };
//     const handleSubmit = e => {
//         e.preventDefault();
//         setList([...list, task]);
//     }
//     return (
//         <form onSubmit={ handleSubmit } className="row text-center p-3">
//             <input onChange={ handleChange } type="text" name="task" className="form-control col-6 m-1"/>
//             <input type="submit" value="Add New Task" className="btn btn-outline-info col-3 m-1"/>
//         </form>
//     );
// };
// export default TaskForm;