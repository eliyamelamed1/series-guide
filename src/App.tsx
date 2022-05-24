import './styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import AppRouter from './AppRouter';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'next-themes';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();
export default function App() {
    return (
        <>
            <ToastContainer />
            <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                    <AppRouter />
                </ThemeProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
}
