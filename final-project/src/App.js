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
import Save from './features/Save/Save';
import Editpage from './pages/Editpage';
import { GoogleOAuthProvider } from "@react-oauth/google";
const googleClientId = '183693880565-u1sni2g5gpfg03fjhv5o5n37rs25homt.apps.googleusercontent.com'

function App() {
  return (

    <div>

      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/exportemail' element={<Header></Header>}></Route>
        <Route path='/mypassword' element={<Header></Header>}></Route>
        <Route path='/fileupload' element={<Header></Header>}></Route>
        <Route path='/mypage' element={<Header></Header>}></Route>
        <Route path='/myconti' element={<Header></Header>}></Route>
        {/* <Route path='/login/oauth/callback/kakao' element={<Header></Header>}></Route> */}
        <Route path='/login/oauth/callback/google' element={<Header></Header>}></Route>
        <Route path='/join' element={<Header></Header>}></Route>
      </Routes>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/exportemail' element={<ExportEmail></ExportEmail>}></Route>
        <Route path='/mypassword' element={<Mypassword></Mypassword>}></Route>
        <Route path='/fileupload' element={<FileUpload></FileUpload>}></Route>
        <Route path='/generate' element={<Generatepage></Generatepage>}></Route>
        <Route path='/mypage' element={<Mypage></Mypage>}></Route>
        <Route path='/myconti' element={<Myconti></Myconti>}></Route>
        <Route path='/edit' element={<Editpage></Editpage>}></Route>

        <Route path='/login' element={<GoogleOAuthProvider clientId={`${googleClientId}`}><Login /></GoogleOAuthProvider>}></Route>
        <Route path='/login/oauth/callback/kakao' element={<OAuthRedirectHandler provider='kakao' />}></Route>
        <Route path='/login/oauth/callback/google' element={<OAuthRedirectHandler provider='google' />}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/generate' element={<Generatepage />}></Route>
        <Route path='/edit' element={<Editpage />}></Route>
        <Route path='/save' element={<Save />}></Route>
      </Routes>

      <Routes>
        <Route path='/' element={<Footer></Footer>}></Route>
        <Route path='/exportemail' element={<Footer></Footer>}></Route>
        <Route path='/mypassword' element={<Footer></Footer>}></Route>
        <Route path='/fileupload' element={<Footer></Footer>}></Route>
        <Route path='/mypage' element={<Footer></Footer>}></Route>
        <Route path='/myconti' element={<Header></Header>}></Route>
        <Route path='/login/oauth/callback/kakao' element={<Footer></Footer>}></Route>
        <Route path='/login/oauth/callback/google' element={<Footer></Footer>}></Route>
        <Route path='/join' element={<Footer></Footer>}></Route>
      </Routes>



    </div>
  );
}

export default App;
