import { createContext, useContext, useEffect, useReducer, useState } from 'react';

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
  const [tasks, dispatch] = useReducer((state: Task[], action: any) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, action.payload]
      case 'DELETE_TASK':
      case 'COMPLETE_TASK':
      default: return state
    }
    return state
  }, []);
  const [countId, setCountID] = useState(0);
  const [completedTasksQuantity, setCompletedTasksQuantity] = useState(0);

  function addTask (taskTitle: string) {
    // const newTask = {
    //   title: taskTitle,
    //   id: faker.datatype.uuid(),
    //   isChecked: false
    // }
    // const newTasks = [...tasks, newTask]
    // setTasks(newTasks);
    dispatch({
      type: 'ADD_TASK',
      payload: {
        title: taskTitle,
        id: faker.datatype.uuid(),
        isChecked: false
      }
    })
  }

  function deleteTask (taskId: string) {
    // const newTasks = tasks.filter(task => task.id !== taskId)
    // setTasks(newTasks);
    dispatch({
      type: 'DELETE_TASK',
      payload: {

      }
    })
    
  }

  function switchCheck (taskId: string) {
    dispatch({
      type: 'COMPLETE_TASK',
      payload: {

      }
    })
    // const arr = [...tasks]
    // const newTasks = arr.map(task => {
    //   if(task.id === taskId){
    //     return {
    //       ...task,
    //       isChecked: !task.isChecked
    //     }
    //   }
    //   return task
    // })

    // setTasks(newTasks);
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