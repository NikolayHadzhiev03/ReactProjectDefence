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
import Search from './components/search/Search'
import Profile from './components/profilePage/Profile'
import FOFPage from './components/404Page/404page'
import GuestRoute from './guards/Userguard'
import IsAuthguard from './guards/isAuthguard'
function App() {


  return (
    <div  >
      <div className="app-container" ></div>
    <Header />
    <main id="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:gameId" element={<Details />} />
        <Route element={<GuestRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         </Route>
         <Route element={<IsAuthguard />}>
         <Route path="/create" element={<Create />} />
         <Route path="/edit/:gameId" element={<EditGame />} />
         <Route path="/profile" element={<Profile />} />
         <Route path='/logout' element={<Logout></Logout>}></Route>
         </Route>
        <Route path="*" element={<FOFPage />} />
      <Route path='/search' element={<Search></Search>}></Route>
      </Routes>
    </main>
   
  </div>
  )
}

export default App
