import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        const token = global.localStorage.getItem('@Agrovence:token');
        const user = global.localStorage.getItem('@Agrovence:user');
        const refreshToken = global.localStorage.getItem(
            '@Agrovence:refreshToken',
        );
        api.defaults.headers.authorization = `Bearer ${token}`;

        api.defaults.headers.common['Content-Type'] = 'application/json';
        api.defaults.headers.common.Accept = 'application/json';

        if (token && user && refreshToken) {
            return { token, refreshToken, user: JSON.parse(user) };
        }

        return {};
    });

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('/auth/login', {
            email,
            password,
        });
        const { token, refreshToken } = response.data.data;
        api.defaults.headers.authorization = `Bearer ${token}`;
        api.defaults.headers.common['Content-Type'] = 'application/json';
        api.defaults.headers.common.Accept = 'application/json';

        const responseMe = await api.get('/me');

        const user = responseMe.data;

        global.localStorage.setItem('@Agrovence:token', token);
        global.localStorage.setItem('@Agrovence:refreshToken', refreshToken);
        global.localStorage.setItem('@Agrovence:user', JSON.stringify(user));

        setData({ token, user });
    }, []);

    const signOut = useCallback(async () => {
        global.localStorage.removeItem('@Agrovence:token');
        global.localStorage.removeItem('@Agrovence:user');
        global.localStorage.removeItem('@Agrovence:refreshToken');

        setData({});
    }, []);

    return (
        <AuthContext.Provider
            value={{
                token: data.token,
                user: data.user,
                refreshToken: data.refreshToken,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth };
