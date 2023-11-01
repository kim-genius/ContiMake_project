
import './features/styles/global.css'
import Header from './features/ui/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Myconti from './pages/Myconti';
import Mypassword from './pages/Mypassword';
import Form from './features/exports/Form';

function App() {
  return (
    <div>
      <Header></Header>
      <Form></Form>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/mypage' element={<Mypage></Mypage>}></Route>
        <Route path='/myconti' element={<Myconti></Myconti>}></Route>
        <Route path='/mypassword' element={<Mypassword></Mypassword>}></Route>
      </Routes>
    </div>
  );
}

export default App;
