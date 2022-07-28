import { ContainerTasks } from './components/ContainerTasks/ContainerTasks'
import { Header } from './components/Header/Header'
import { Search } from './components/Search/Search'

import { TaskProvider } from './hooks/useTask'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <TaskProvider >
        <Search />
        <ContainerTasks />
      </TaskProvider>
    </>
  )
}

