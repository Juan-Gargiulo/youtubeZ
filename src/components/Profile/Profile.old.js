import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();

  }

  render() {



    if (this.props.profile === undefined){
        return null
    }

    return (
        <div>
            <img src={ this.props.profile.imageUrl } />
            <p>{ this.props.profile.email}</p>
        </div>
    )
  }

}

export default Profile;
