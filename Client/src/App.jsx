import './App.css'
import Details from './components/details/Details'
import EditGame from './components/editGame/EditGame'
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from './components/login/Login'
import Register from './components/register/register'
import Catalog from './components/catalog/Catalog'
import Create from './components/create/Create'
import {Routes , Route} from 'react-router'
import Logout from './components/logout/Logout'
function App() {


  return (
    <div>
    <Header />
    <main id="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:gameId" element={<Details />} />
        <Route path="/edit/:gameId" element={<EditGame />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      <Route path='/logout' element={<Logout></Logout>}></Route>
      </Routes>
    </main>
  </div>
  )
}

export default App
