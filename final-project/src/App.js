import './features/styles/global.css'
import Header from './features/ui/header/Header';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Generatepage from './pages/Generatepage';
import Inpainting from './features/inpainting/Inpainting';
import Editpage from './pages/Editpage';
function App() {
  return (
    <div>
      <Header></Header> 
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/generate' element={<Generatepage/>}></Route>
        <Route path='/edit' element={<Editpage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
