import './features/styles/global.css'
import Header from './features/ui/header/Header';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './features/ui/footer/Footer';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
