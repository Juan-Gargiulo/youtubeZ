import React from 'react';

import { Button } from 'react-mdl'

const Profile = ( {profile, logout} ) => {

    if (profile.imageUrl === null){
        return null
    }

    return (
        <div>
            <img src={ profile.imageUrl } />
            <p>{ profile.email}</p>
            <Button raised colored onClick={logout}>Logout</Button>
        </div>
    );
};

export default Profile;