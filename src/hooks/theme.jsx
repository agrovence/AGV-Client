import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

const ThemeContext = createContext({});

const ThemeProviderContext = ({ children }) => {
    const [theme, setTheme] = useState(light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProviderContext');
    }

    return context;
}

export { ThemeProviderContext, useTheme };
