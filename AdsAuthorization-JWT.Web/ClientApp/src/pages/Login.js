import React, { useState } from 'react';
import getAxios from '../AuthorizationAxios';
import { useHistory } from 'react-router-dom';
import { useAuthorization } from '../AuthorizationContext';

const Login = () => {
    const [formData, setFormData] = useState(
        {
            email: '',
            password: ''
        }
    );
    const history = useHistory();
    const [isValid, setIsValid] = useState(true);
    const { setUser } = useAuthorization();
    const onTextChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onFormSubmit = async e => {
        try {
            e.preventDefault();
            const { data } = await getAxios().post('/api/account/login', formData);
            const { token } = data;
            localStorage.setItem('auth-token', token);
            setIsValid(true);
            const { data: user } = await getAxios().get('/api/account/getcurrentuser');
            setUser(user);
            history.push('/');
        }
        catch (e) {
setIsValid(false);
        }
    }
    return (<div className='container col-md-6 mt-3'>
        <form className='card card-body bg-light' onSubmit={onFormSubmit}>
            <h3>Login</h3>
            {!isValid && <p className='text-danger'>Invalid username or password</p>}
            <input type='email' onChange={onTextChange} className='form-control mt-3' placeholder='Email' name='email'></input>
            <input type='password' onChange={onTextChange} className='form-control mt-3' placeholder='Password' name='password'></input>
            <button className='btn btn-primary col-md-4 mt-3'> Login</button>
        </form>
    </div>)
}
export default Login;