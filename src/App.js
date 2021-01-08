import "react-loadingmask/dist/react-loadingmask.css";
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routes/index'

import { ThemeProviderContext } from 'hooks/theme'
import { AuthProvider } from 'hooks/auth'

import GlobalStyles from './styles/global'

function App() {
    return (
        <ThemeProviderContext>
            <AuthProvider>
                <Router>
                    <Routes />
                </Router>
                <GlobalStyles />
            </AuthProvider>
        </ThemeProviderContext>
    );
}

export default App;
