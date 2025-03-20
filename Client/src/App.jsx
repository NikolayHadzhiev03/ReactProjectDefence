import './App.css'
import Details from './components/details/Details'
import EditGame from './components/editGame/EditGame'
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from './components/login/Login'
import Register from './components/register/register'
import Catalog from './components/catalog/Catalog'
import CreateGame from './components/create/Create'

function App() {


  return (
    <div>
      <Header></Header>
      <main id="main-content">
        <CreateGame></CreateGame>
      </main>
    </div>
  )
}

export default App
