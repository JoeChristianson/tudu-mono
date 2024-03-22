import './App.css'
import { useAppSelector } from './app/hooks'
import Auth from './components/Auth'
import DetailsPane from './components/DetailsPane'
import Main from './components/Main'
import ModalResolver from './components/ModalResolver'
import NotesModule from './components/NotesModule'
import TasksList from './components/TasksList'
import TopBar from './components/TopBar'

function App() {

  const loggedIn = useAppSelector((state)=>state.auth.loggedIn)
  const taskId = useAppSelector(s=>s.tasks.detailedTaskId)

  if(!loggedIn){
    return<Auth></Auth>
  }

  return (
<>
<ModalResolver></ModalResolver>
<TopBar></TopBar>
<Main>
      <TasksList></TasksList>
      <DetailsPane  key={taskId}></DetailsPane>
      <NotesModule></NotesModule>
    </Main>
</>
    )
}

export default App