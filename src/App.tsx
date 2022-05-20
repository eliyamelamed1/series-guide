import './styles/main.scss';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import React from 'react';
import { ThemeProvider } from 'next-themes';

const queryClient = new QueryClient();

export default function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='*' element={<Navigate to='/' />} />
                        </Routes>
                    </Router>
                </ThemeProvider>
            </QueryClientProvider>
        </>
    );
}
