import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Profile from './pages/Profile';
import React from 'react';
import Search from './pages/Search';
import { routes } from './utils/routes';

const AppRouter = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path={routes().home} element={<Home />} />
                    <Route path='/search/:q' element={<Search />} />
                    <Route path=':showId' element={<Profile />} />
                    <Route path='*' element={<Navigate to={routes().home} />} />
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;
