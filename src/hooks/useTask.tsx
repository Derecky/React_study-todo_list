import { createContext, useContext, useEffect, useState } from 'react';

import { faker } from '@faker-js/faker';

import { Task } from '../models/Task';

interface ITaskContextProps {
  taskStore: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: string) => void;
  switchCheck: (id: string) => void;
  completedTasksQuantity: number;
}

const TaskContext = createContext({} as ITaskContextProps);

export function TaskProvider({children}: any){
  const [tasks, setTasks] = useState<Task[]>([]);
  const [countId, setCountID] = useState(0);
  const [completedTasksQuantity, setCompletedTasksQuantity] = useState(0);

  function addTask (taskTitle: string) {
    const newTask = {
      title: taskTitle,
      id: faker.datatype.uuid(),
      isChecked: false
    }
    console.log(newTask)
    const newTasks = [...tasks, newTask]
    setTasks(newTasks);
    setCountID(countId + 1)
  }

  function deleteTask (taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks);
  }

  function switchCheck (taskId: string) {
    const arr = [...tasks]
    const newTasks = arr.map(task => {
      if(task.id === taskId){
        return {
          ...task,
          isChecked: !task.isChecked
        }
      }
      return task
    })

    setTasks(newTasks);
  }

  const store: ITaskContextProps = {
    taskStore: tasks,
    addTask,
    deleteTask,
    switchCheck,
    completedTasksQuantity,
  }

  useEffect(() => {
    let count = 0;
    tasks.forEach(task => {
      if(task.isChecked === true){
        count++;
      }
    })
    setCompletedTasksQuantity(count)
  }, [tasks])

  return (
    <TaskContext.Provider value={store}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTask(){
  return useContext(TaskContext);
}