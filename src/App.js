import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TaskPage from './components/TaskPage';
import Login from './components/login';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/tasks/:taskType" element={<TaskPage />} />
          <Route path="/timetable" element={<TaskPage taskType="time-table" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
