import './App.css'
import { useAppSelector } from './app/hooks'
import Auth from './components/Auth'
import DetailsPane from './components/DetailsPane'
import Main from './components/Main'
import SideMenu from './components/SideMenu'
import TasksList from './components/TasksList'

function App() {

  const loggedIn = useAppSelector((state)=>state.auth.loggedIn)

  if(!loggedIn){
    return<Auth></Auth>
  }

  return (
    <Main>
      <SideMenu></SideMenu>
      <TasksList></TasksList>
      <DetailsPane></DetailsPane>
    </Main>
    )
}

export default App