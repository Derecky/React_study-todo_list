import { Task } from '../../models/Task';

import styles from './TaskCard.module.css';

import { useTask } from '../../hooks/useTask';

import Unchecked from '../../assets/unchecked.svg';
import Checked from '../../assets/checked.svg';
import Trash from '../../assets/trash.svg';

interface TaskCardProps {
  task: Task,
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { deleteTask, switchCheck } = useTask()

  function handleChangeCheckbox() {
    switchCheck(task.id)
  }

  function handleDeleteTask(){
    deleteTask(task.id)
  }

  return (
    <div className={styles.cardContainer}>
      <label >
        {task.isChecked ?
          <img src={Unchecked} alt="Unchecked" /> :
          <img src={Checked} alt="Checked" />
        }
        <input 
          type='checkbox' 
          checked={task.isChecked} 
          onChange={handleChangeCheckbox}
        />
        <p className={task.isChecked ? styles.completed : styles.incompleted}>{task.title}</p>
      </label>
      <button 
        className={styles.trashIcon}
        onClick={handleDeleteTask}
      >
        <img src={Trash} alt="Trash" />
      </button>
    </div>
  );
}