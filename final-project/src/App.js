import './features/styles/global.css'
import Header from './features/ui/header/Header';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
