// **************************************
// *      Sotheary Ouk, 05-08-2020      *
// **************************************
import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import TaskDisplay from './components/TaskDisplay';

function App() {
  const [tasksList, setTasksList] = useState([]);
  const addNewTask = (newTask) => {
    setTasksList([...tasksList, newTask]);
  }
  return (
    <div className="App container p-5">
        <h3 className="border-bottom">To Do List:</h3>
        <TaskForm addNewTask={addNewTask}/>
        <div className="">{
          tasksList.map((task, key) =>
            <div key={key} className="col-9">
              <TaskDisplay oneTask={task}/>
            </div>
          )
        }</div>
    </div>
  );
}

export default App;

// // *****************************************************************
// // *                    Alternative Approach                       *
// // * Use with Alternative Approach in TaskForm.js & TaskDisplay.js *
// // *****************************************************************
// // Alternative approach passes through the entire list of tasks to Taskform and TaskDisplay rather than just a single task.
// // The delete button filters the list, rather than having each task have a "isDeleted" attribute
//
// import React, {useState} from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import TaskForm from './components/TaskForm';
// import TaskDisplay from './components/TaskDisplay';
// function App() {
//   const [list, setList ] = useState([]);
//   return (
//     <div className="App container p-5">
//       <h3 className="border-bottom">To Do List:</h3>
//       <TaskForm list={list} setList={setList}/>
//       <div>{
//         list.map((task, index) =>(
//           <TaskDisplay task={task} list={list} setList={setList} index={index}/>
//         ))
//       }
//       </div>
//     </div>
//   );
// }
// export default App;