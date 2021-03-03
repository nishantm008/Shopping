import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router';

const clientId =
    '795447102884-93gjj56spb8g83vflgjgjej16ggj1hlt.apps.googleusercontent.com';

export default function Home() {

    const history = useHistory()

    const onSuccessLogout = () => {
        history.push('/')
        console.log('Logout made successfully');
        alert('Logout made successfully ✌');
    };
    return (
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccessLogout}
        ></GoogleLogout>
    )

}