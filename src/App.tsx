import './styles/main.scss';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import Search from './pages/Search';
import { ThemeProvider } from 'next-themes';
import { routes } from './utils/routes';

const queryClient = new QueryClient();

export default function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path={routes.home} element={<Home />} />
                            <Route path={routes.search} element={<Search />} />
                            <Route path='*' element={<Navigate to={routes.home} />} />
                        </Routes>
                    </Router>
                </ThemeProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
}
