import './features/styles/global.css'
import Header from './features/ui/header/Header';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Generatepage from './pages/Generatepage';
function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/generate' element={<Generatepage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
