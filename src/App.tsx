import './styles/main.scss';

import { QueryClient, QueryClientProvider } from 'react-query';

import AppRouter from './AppRouter';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'next-themes';

const queryClient = new QueryClient();
export default function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                    <AppRouter />
                </ThemeProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
}
