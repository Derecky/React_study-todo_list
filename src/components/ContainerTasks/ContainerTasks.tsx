import { TaskCard } from '../TaskCard/TaskCard';

import { useTask } from '../../hooks/useTask';

import styles from './ContainerTasks.module.css'

import Clipboard from '../../assets/Clipboard.png'

export const ContainerTasks = () => {
  const { taskStore, deleteTask, switchCheck, completedTasksQuantity } = useTask();

  const tasksQuantity = taskStore.length;
  return (
    <main>
      <div className={styles.infoContainer}>
        <p>
          Tarefas criadas
          <span className={styles.notifyNumber}>{tasksQuantity}</span>
        </p>
        <p>
          Concluídas
          <span className={styles.notifyNumber}>{completedTasksQuantity} de {tasksQuantity} </span>
        </p>
      </div>
      <div className={styles.tasksContainer}>
        {tasksQuantity > 0 ? 
          (
            <div className={styles.tasksList}>
              {taskStore.map((task) => (
                <TaskCard 
                  key={task.id}
                  task={task}
                />
              ))}
            </ div>
          ) : 
          (
            <div className={styles.emptyInfo}>
              <img src={Clipboard} alt="Clipboard"/>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          )
        }
      </div>
    </main>
  )
}