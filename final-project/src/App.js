import './features/styles/global.css'
import Header from './features/ui/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Join from './pages/Join';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/join' element={<Join />}></Route>

      </Routes>
    </div>
  );
}

export default App;
