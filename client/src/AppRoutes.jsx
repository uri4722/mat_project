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
import getHeDates from './function/getHeDates';
import MyCommitments from './pages/MyCommitments';
import ErrorPage from './pages/ErrorPage';
import UserRegister from './pages/UserRegister';
import Admin from './pages/Admin';


function AppRoutes() {



    return (
        <Routes>
            <Route index element={<LandingPage />} />
            < Route path='login' element={< Login/>} />
            < Route path='logout' element={< Logout />} />
            < Route path='home' element={<Home />} />
            < Route path='managerRegister' element={<ManagerRegister />} />
            < Route path='UserRegister' element={<UserRegister />} />
            < Route path='about' element={<About />} />
            < Route path='memorialProfile/:id' element={<MemorialProfile />} />
            < Route path='createPassedAway' element={<CreatePassedAway heDates={getHeDates()} />} />
            < Route path='MyAccount' element={<MyAccount />} />
            < Route path='MyCommitments' element={<MyCommitments />} />
            < Route path='userLogin' element={<Login/>} />
            < Route path='admin' element={<Admin />}/>
            < Route path='error' element={<ErrorPage />} />
            <Route path="*" element={<NoPage />} />
            


        </Routes>
    );
}
export default AppRoutes;
