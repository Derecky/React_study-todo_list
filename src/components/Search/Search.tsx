import { ChangeEvent, FormEvent, useState } from 'react';

import PlusIcon from '../../assets/plus.svg'

import styles from './Search.module.css';

import { useTask } from '../../hooks/useTask';

interface SearchProps {
  addTask: (title: string) => void
}

export const Search = () => {
  const [newTask, setNewTask] = useState('');
  const { addTask } = useTask()
  
  function handleAddNewTask (event: FormEvent) {
    event.preventDefault();
    
    if(newTask.length === 0) return;
    addTask(newTask);
    setNewTask('');
  }

  function handleChangeTaskInput (event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  return (
    <form 
      className={styles.formContainer}
      onSubmit={handleAddNewTask}  
    >
      <input 
        className={styles.searchInput}
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleChangeTaskInput}
      />
      <button
        className={styles.submitBtn}
      > 
        Criar
        <img src={PlusIcon} alt="PlusIcon"/>
      </button>
    </form>
  );
}