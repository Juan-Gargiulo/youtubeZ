import React from 'react';
import PropTypes from 'prop-types'

import './profile.css'

const Profile = ( {profile, logout} ) => {

/*if (profile.imageUrl === null){
    return null
}*/

    return (
        <div className="profile">
            <div className="cont">
                <img className="imgProfile" src={ profile.imageUrl } alt={ profile.email } />
                <p>{ profile.email }</p>
                <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

Profile.PropTypes = {
    profile: PropTypes.object,
    logout: PropTypes.func
}

export default Profile;