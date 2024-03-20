import './App.css'
import { useAppSelector } from './app/hooks'
import Auth from './components/Auth'
import DetailsPane from './components/DetailsPane'
import Main from './components/Main'
import NotesModule from './components/NotesModule'
import TasksList from './components/TasksList'

function App() {

  const loggedIn = useAppSelector((state)=>state.auth.loggedIn)

  if(!loggedIn){
    return<Auth></Auth>
  }

  return (
    <Main>
      <TasksList></TasksList>
      <DetailsPane></DetailsPane>
      <NotesModule></NotesModule>
    </Main>
    )
}

export default App