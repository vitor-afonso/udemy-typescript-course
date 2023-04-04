import React, { useState } from 'react';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import { ITask } from './interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>What to do?</h2>
          <TaskForm btnText='Create task' taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Tasks</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
