import { Route, Routes } from 'react-router-dom';

import './App.css';
import NoPage from './pages/NoPage';
import ManagerRegister from './pages/ManagerRegister';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';

function AppRoutes(props) {
    return (
        <Routes>

            <Route index element={<LandingPage />} />
            < Route path='Home' element={<Home />} />
            < Route path='ManagerRegister' element={<ManagerRegister />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    );
}
export default AppRoutes;
