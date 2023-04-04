import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styles from './TaskForm.module.css';

import { ITask } from './../interfaces/Task';

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [dificulty, setDificulty] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setDificulty(+e.target.value);
    }
  };
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, dificulty };

    // "!" tells TS that even if the property may not exist
    // we know that it will come
    setTaskList!([...taskList, newTask]);
    setTitle('');
    setDificulty(0);

    console.log('taskList => ', taskList);
  };
  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <div className={styles.input_container}>
        <label htmlFor='title'>Title:</label>
        <input type='text' name='title' placeholder='Task title' value={title} onChange={handleChange} />
      </div>
      <div className={styles.input_container}>
        <label htmlFor='dificulty'>Dificulty:</label>
        <input type='text' name='dificulty' placeholder='Task dificulty' value={dificulty} onChange={handleChange} />
      </div>

      <input type='submit' value={btnText} />
    </form>
  );
};

export default TaskForm;
