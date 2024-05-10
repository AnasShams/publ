import React from 'react';
import { useParams } from 'react-router-dom';


function TaskPage() {
  const { taskType } = useParams();

  return (
    <div>
      <h1>This is the {taskType} task page</h1>
    </div>
  );
}

export default TaskPage
