import './login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [tasks, setTasks] = useState([]);
  const [newTaskType, setNewTaskType] = useState('Daily');
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = () => {
    if (newTaskName.trim() !== '') {
      const newTask = {
        name: newTaskName,
        type: newTaskType,
        status: 'Pending'
      };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleDiscardTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = 'Completed';
    setTasks(updatedTasks);
  };

  return (
    <main className="App">
      <div className="navbar-list">
        <li className="all"><Link to="/tasks/all tasks">All Tasks</Link></li>
        <li className='work'><Link to="/tasks/work">Work</Link></li>
        <li className='work'><Link to="/tasks/personal">Personal</Link></li>
        <li className='work'><Link to="/timetable">Time Table</Link></li>
        <li className='work'><Link to="/tasks/untitiled">Untitled</Link></li>
        <li className='right-item'> + Add Yours</li>
      </div>

      <div className="main-container">
        <div className='sub-conatiner1'>
          <div className='sub-container4'>
            <div className="column">
              <div className="task-section1">
                <div className="new-task" onClick={() => setNewTaskType('Daily')}>Daily</div>
                <div className="new-task" onClick={() => setNewTaskType('Weekly')}>Weekly</div>
                <div className="new-task" onClick={() => setNewTaskType('Monthly')}>Monthly</div>
              </div>
              <div className='headtext'>
                New Task <div className='addtask'>
                  <text className='plus' onClick={handleAddTask}>+</text>
                </div>
              </div>
              <div className='task-section12'><input type="text" className='input' value={newTaskName}
                                                      onChange={(e) => setNewTaskName(e.target.value)}
                                                      onKeyPress={handleKeyPress} placeholder="Enter task name"
              /></div>
            </div>
          </div>

          <div className="completed-column">
            <h2>Completed</h2>
            <div className="task-section">
              {tasks.map((task, index) =>
                task.status === 'Completed' &&
                <div className="task" key={index}>
                  {task.name}
                  <div className='task-options'>
                    <span onClick={() => handleDiscardTask(index)}> ❌</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='sub-conatiner2'>
          <div className="pending-column">
            <h2>Pending</h2>
            <div className="task-section">
              {tasks.map((task, index) =>
                task.status === 'Pending' &&
                <div className="task" key={index}>
                  <div>{task.name}</div>
                  <div className="task-options">
                    <span onClick={() => handleCompleteTask(index)}> ✓</span>
                    <span onClick={() => handleDiscardTask(index)}> ❌</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Link to="/timetable" className="time-column">
            <h2>Time Table</h2>
            <div className="time-table">
              <div className="task">Date:</div>
              <div className="task">Subject:</div>
              <div className="task">Timings:</div>
              <div className="task">Room no:</div>
            </div>
          </Link>
        </div>
        <div className='sub-container3'>
          <section className="calendar-column">
            <h2>Calendar</h2>
            <div className="calendar">
              <div className="year-month">2024 March</div>
              <div className="dates">
                <div className="date">Mon</div>
                <div className="date">Tue</div>
                <div className="date">Wed</div>
                <div className="date">Thu</div>
                <div className="date">Fri</div>
                <div className="date">Sat</div>
                <div className="date">Sun</div>
                <div className="date"></div>
                <div className="date"></div>
                <div className="date"></div>
                <div className="date"></div>
                {Array.from({length: 31}, (_, index) => (
                  <div className="date" key={index}>{index + 1}</div>
                ))}
              </div>
              <div className="events-today">Events Today:</div>
              <div className='events-line'> </div>
              <div className='events-line'> </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Login;
