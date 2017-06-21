import React from 'react';
import PropTypes from 'prop-types'


const Profile = ( {profile, logout} ) => {

/*    if (profile.imageUrl === null){
        return null
    }*/

    return (
        <div>
            <img src={ profile.imageUrl } alt={ profile.email } />
            <p>{ profile.email }</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

Profile.PropTypes = {
    profile: PropTypes.object,
    logout: PropTypes.func
}

export default Profile;