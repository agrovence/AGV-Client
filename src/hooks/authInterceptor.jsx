import api from 'services/api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const Index = () => {
    const history = useHistory();
    api.interceptors.response.use(
        response => response,
        err =>
            new Promise(resolve => {
                const originalReq = err.config;
                if (
                    err.response.status === 401 &&
                    err.config &&
                    !err.config.__isRetryRequest
                ) {
                    originalReq._retry = true;

                    const res = fetch(
                        `${process.env.REACT_APP_API}/auth/refresh`,
                        {
                            method: 'POST',

                            headers: {
                                ContentType: 'application/json',
                                Accept: 'application/json',
                                refresh_token: `Bearer ${localStorage.getItem(
                                    '@Agrovence:refreshToken',
                                )}`,
                            },
                        },
                    )
                        .then(response => response.json())
                        .then(response => {
                            if (response.message === 'Não autenticado') {
                                localStorage.removeItem('@Agrovence:token');
                                localStorage.removeItem('@Agrovence:user');

                                return history.push('/login');
                            }

                            return auth(originalReq);
                        });

                    resolve(res);
                }

                if (err.response.data.error) {
                    toast.error(err.response.data.error);
                }

                if (err.response.data.exception) {
                    toast.error(err.response.data.exception);
                }

                if (err.response.status === 500 || !err.response) {
                    toast.error('Erro de Servidor');
                }

                return Promise.reject(err);
            }),
    );
};

export default Index;
