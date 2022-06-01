import React, { useState, useEffect } from 'react';
import getAxios from '../AuthorizationAxios';
import Ad from '../components/Ad';
import { useAuthorization } from '../AuthorizationContext';


const Home = () => {
    const [ads, setAds] = useState();
    const { user } = useAuthorization();

    useEffect(() => {
        getAds();
    }, [])
    const getAds = async () => {
        const { data } = await getAxios().get('/api/ads/getads');
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
                canDelete={user && user.id === a.userId}
                onDeleteClick={() => onDeleteClick(a.id)}
            />)}

        </div>
    )
}
export default Home;