import './features/styles/global.css'
import Header from './features/ui/header/Header';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
