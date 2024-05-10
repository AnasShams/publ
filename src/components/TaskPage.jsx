import React from 'react';
import { useParams } from 'react-router-dom';
import './TaskPage.css'

function TaskPage() {
  const { taskType } = useParams();

  console.log("taskType:", taskType); // Add this line for debugging

  return (
    <div>
      <h1 className='text'>This is the {taskType} page</h1>
    </div>
  );
}

export default TaskPage;
