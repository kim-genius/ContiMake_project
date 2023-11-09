import './features/styles/global.css'
import Header from './features/ui/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Myconti from './pages/Myconti';
import Mypassword from './pages/Mypassword';
import ExportEmail from './features/exports/ExportEmail';
import Join from './pages/Join'
// import Join from './pages/Join';
import Login from './features/auth/login/Login';
import Footer from './features/ui/footer/Footer';
import Generatepage from './pages/Generatepage';
import OAuthRedirectHandler from './features/auth/OAuthRedirectHandler';
import FileUpload from './features/FileUpload/FileUpload';
import Editpage from './pages/Editpage';
import KakaoLoginButton from './features/auth/login/KakaoLoginButton';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/exportemail' element={<ExportEmail></ExportEmail>}></Route>
        <Route path='/mypassword' element={<Mypassword></Mypassword>}></Route>
        <Route path='/fileupload' element={<FileUpload></FileUpload>}></Route>
        <Route path='/generate' element={<Generatepage></Generatepage>}></Route>
        <Route path='/mypage' element={<Mypage></Mypage>}></Route>
        <Route path='/myconti' element={<Myconti></Myconti>}></Route>
        <Route path='/edit' element={<Editpage></Editpage>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/login/oauth/callback/kakao' element={<OAuthRedirectHandler/>}></Route>
        <Route path='/login/oauth/callback/google' element={<OAuthRedirectHandler/>}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/generate' element={<Generatepage />}></Route>
        <Route path='/edit' element={<Editpage />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
