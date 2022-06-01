
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthorization } from '../AuthorizationContext';

const Logout = () => {
    const history = useHistory();
    const { setUser } = useAuthorization();

    useEffect(() => {
        const logout = async () => {
            setUser(null);
            localStorage.removeItem('auth-token');
        }

        logout();
        history.push('/');

    }, []);

    return <></>
}

export default Logout;