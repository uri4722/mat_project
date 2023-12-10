import { Route, Routes } from 'react-router-dom';

import './App.css';
import NoPage from './pages/NoPage';
import ManagerRegister from './pages/ManagerRegister';
import Home from './pages/Home';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';

function AppRoutes() {
    return (
        <Routes>
            <Route index element={<LandingPage />} />
            < Route path='login' element={< Login />} />
            < Route path='home' element={<Home />} />
            < Route path='managerRegister' element={<ManagerRegister />} />
            < Route path='about' element={<About />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    );
}
export default AppRoutes;
