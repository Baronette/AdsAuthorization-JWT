import React, {useState} from 'react';
import getAxios from '../AuthorizationAxios';
import {useHistory} from 'react-router-dom'

const AdForm = () => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [description, setDescription] = useState();
    const history = useHistory();

    const onFormSubmit = async (e) => {
        e.preventDefault();
        await getAxios().post('api/ads/newad', {phoneNumber, description})
        history.push('/');
    }

    return (
        <div className='container col-md-5 mt-3'>
            <form className='card card-body bg-light' onSubmit={onFormSubmit}>
                <h3>New Ad</h3>
                <input type='text' onChange={e => setPhoneNumber(e.target.value)} className='form-control mt-3' placeholder='Phone Number'></input>
                <textarea rows='8' onChange={e => setDescription(e.target.value)} className='form-control mt-3' placeholder='Description'></textarea>
                <button className='btn btn-primary col-md-4 mt-3'> Submit</button>
            </form>
        </div>
    )
}
export default AdForm;