import React, { useState } from 'react';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

import { ITask } from './interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (taskId: number) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  const editTask = (task: ITask) => {
    setTaskToUpdate(task);
    setIsModalOpen(true);
  };

  const updateTask = (updatedTask: ITask) => {
    const updatedList = taskList.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTaskList!(updatedList);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        children={<TaskForm btnText='Edit Task' taskList={taskList} taskToUpdate={taskToUpdate} setTaskList={setTaskList} handleUpdate={updateTask} />}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>What to do?</h2>
          <TaskForm btnText='Create task' taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Tasks</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} setIsModalOpen={setIsModalOpen} handleEdit={editTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
