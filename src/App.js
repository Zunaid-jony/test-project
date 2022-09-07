import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <div className='header'>
       <NavLink exact activeClassName="active" to="/">Home</NavLink>
       <NavLink  activeClassName="active" to="/login">Login <small> access without token</small></NavLink>

     </div>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/Login' element={<Login></Login>}></Route>
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
