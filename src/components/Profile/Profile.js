import React from 'react';
import PropTypes from 'prop-types'

import { Button } from 'react-mdl'

const Profile = ( {profile, logout} ) => {

    if (profile.imageUrl === null){
        return null
    }

    return (
        <div>
            <img src={ profile.imageUrl } alt={ profile.email } />
            <p>{ profile.email }</p>
            <Button raised colored onClick={logout}>Logout</Button>
        </div>
    );
};

Profile.PropTypes = {
    profile: PropTypes.object,
    logout: PropTypes.func
}

export default Profile;