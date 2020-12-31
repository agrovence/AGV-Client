import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        const access_token = global.localStorage.getItem(
            '@Agrovence:access_token',
        );
        const user = global.localStorage.getItem('@Agrovence:user');
        api.defaults.headers.authorization = `Bearer ${access_token}`;

        api.defaults.headers.common['Content-Type'] = 'application/json';
        api.defaults.headers.common.Accept = 'application/json';

        if (access_token && user) {
            return { access_token, user: JSON.parse(user) };
        }

        return {};
    });

    const signIn = useCallback(async ({ email, password }) => {
        setData({});

        global.localStorage.removeItem('@Agrovence:access_token');
        global.localStorage.removeItem('@Agrovence:user');

        const response = await api.post('/auth/login', {
            email,
            password,
        });

        const { access_token } = response.data;
        api.defaults.headers.authorization = `Bearer ${access_token}`;
        api.defaults.headers.common['Content-Type'] = 'application/json';
        api.defaults.headers.common.Accept = 'application/json';

        const responseMe = await api.get('auth/me');

        const user = responseMe.data[0];
        const { role } = responseMe.data[0];

        global.localStorage.setItem('@Agrovence:access_token', access_token);
        global.localStorage.setItem('@Agrovence:user', JSON.stringify(user));

        setData({ access_token, user, role });
    }, []);

    const signOut = useCallback(async () => {
        global.localStorage.removeItem('@Agrovence:access_token');
        global.localStorage.removeItem('@Agrovence:user');

        setData({});
    }, []);

    return (
        <AuthContext.Provider
            value={{
                access_token: data.access_token,
                user: data.user,
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
