import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Auth from './pages/auth';
import Member from './pages/member';
import Explore from './pages/explore';
import ProfessionDashboard from './pages/professiondashboard';

function App() {
  return (
    <div className="App">
     <BrowserRouter  >
     <Routes>
       <Route path='/' element={<ProfessionDashboard/>} />
       <Route path='/auth' element={<Auth/>} />
       <Route path='/explore' element={<Explore/>} />
       <Route path='/member' element={<Member/>} />
       <Route path='/professions' element={<ProfessionDashboard/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
