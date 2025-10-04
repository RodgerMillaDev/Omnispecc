import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Auth from './pages/auth';
import Member from './pages/member';
import Explore from './pages/explore';

function App() {
  return (
    <div className="App">
     <BrowserRouter  >
     <Routes>
       <Route path='/' element={<Auth/>} />
       <Route path='/auth' element={<Auth/>} />
       <Route path='/explore' element={<Explore/>} />
       <Route path='/member' element={<Member/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
