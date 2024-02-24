import './features/styles/global.css'
import Header from './features/ui/header/Header';
import { Route, Routes } from 'react-router-dom';
import ExportEmail from './features/exports/ExportEmail';
// import Join from './pages/Join';
import Footer from './features/ui/footer/Footer';
import OAuthRedirectHandler from './features/auth/OAuthRedirectHandler';
import FileUpload from './features/FileUpload/FileUpload';
import SpeechBubble from './features/speechbubble/components/SpeechBubble';
import { GoogleOAuthProvider } from "@react-oauth/google";
import loadable from '@loadable/component'

const Home = loadable(() => import('./pages/Home'))
const Generatepage = loadable(()=> import('./pages/Generatepage'))
const Login = loadable(()=>import('./features/auth/login/Login'))
const Join = loadable(()=>import('./pages/Join'))
const Mypage = loadable(()=>import('./pages/Mypage'))
const Myconti = loadable(()=>import('./pages/Myconti'))
const Editpage = loadable(()=>import('./pages/Editpage'))
const Mypassword = loadable(()=>import('./pages/Mypassword'))


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
      </Routes>

      <Routes>
        <Route path='/speechbubble' element={<SpeechBubble></SpeechBubble>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/exportemail' element={<ExportEmail></ExportEmail>}></Route>
        <Route path='/mypassword' element={<Mypassword></Mypassword>}></Route>
        <Route path='/fileupload' element={<FileUpload></FileUpload>}></Route>
        <Route path='/generate' element={<Generatepage></Generatepage>}></Route>
        <Route path='/mypage' element={<Mypage ></Mypage>}></Route>
        <Route path='/myconti' element={<Myconti></Myconti>}></Route>
        <Route path='/edit' element={<Editpage></Editpage>}></Route>

        <Route path='/login' element={<GoogleOAuthProvider clientId={`${googleClientId}`}><Login /></GoogleOAuthProvider>}></Route>
        <Route path='/login/oauth/callback/kakao' element={<OAuthRedirectHandler provider='kakao' />}></Route>
        <Route path='/login/oauth/callback/google' element={<OAuthRedirectHandler provider='google' />}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/generate' element={<Generatepage />}></Route>
        <Route path='/edit' element={<Editpage />}></Route>
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

      </Routes>



    </div>
  );
}

export default App;
