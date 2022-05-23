import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import React from 'react';
import Search from './pages/Search';
import ShowProfile from './pages/ShowProfile';
import { routes } from './utils/routes';

const AppRouter = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path={routes().home} element={<Home />} />
                    <Route path={routes().search} element={<Search />} />
                    <Route path=':showId' element={<ShowProfile />} />
                    <Route path='*' element={<Navigate to={routes().home} />} />
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;
