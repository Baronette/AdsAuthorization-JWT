import React, { useState, useEffect } from 'react';
import getAxios from '../AuthorizationAxios';
import Ad from '../components/Ad';

const Account = () => {
    const [ads, setAds] = useState();

    useEffect(() => {
        getAds();
    }, [])
    const getAds = async () => {
        const { data } = await getAxios().get('/api/ads/getadsbyuser');
        setAds(data);
    }
    const onDeleteClick = async (id) => {
        await getAxios().post('api/ads/delete', { id });
        getAds();
    }
    return (
        <div className='container col-md-6 offset-3 mt-3'>
            {ads && ads.map(a => <Ad
                key={a.id}
                ad={a}
                canDelete={true}
                onDeleteClick={() => onDeleteClick(a.id)}
            />)}

        </div>
    )
}
export default Account;