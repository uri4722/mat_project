import { Route, Routes } from 'react-router-dom';

import './App.css';
import NoPage from './pages/NoPage';
import ManagerRegister from './pages/ManagerRegister';
import Home from './pages/Home';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import MemorialProfile from './pages/MemorialProfile';
import CreatePassedAway from './pages/CreatePassedAway';
import MyAccount from './pages/MyAccount';
import Logout from './pages/Logout';


function AppRoutes() {



    return (
        <Routes>
            <Route index element={<LandingPage />} />
            < Route path='login' element={< Login />} />
            < Route path='logout' element={< Logout />} />
            < Route path='home' element={<Home />} />
            < Route path='managerRegister' element={<ManagerRegister />} />
            < Route path='about' element={<About />} />
            < Route path='memorialProfile/:id' element={<MemorialProfile />} />
            < Route path='createPassedAway' element={<CreatePassedAway />} />
            < Route path='MyAccount' element={<MyAccount />} />
            <Route path="*" element={<NoPage />} />


        </Routes>
    );
}
export default AppRoutes;
