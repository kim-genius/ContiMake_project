import './features/styles/global.css'
import Header from './features/ui/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Myconti from './pages/Myconti';
import Mypassword from './pages/Mypassword';
import Form from './features/exports/Form';
import Login from './pages/Login';
import Join from './pages/Join';
import Footer from './features/ui/footer/Footer';
import FileUpload from './features/FileUpload/FileUpload';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
        <Route path='/mypage' element={<Mypage></Mypage>}></Route>
        <Route path='/myconti' element={<Myconti></Myconti>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/mypassword' element={<Mypassword></Mypassword>}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
        <Route path='/fileupload' element={<FileUpload></FileUpload>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
