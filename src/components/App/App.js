import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LoginAct, LogoutAct } from './AppActions.js'

import './App.css';
import Login                from '../Login/Login'
import Profile              from '../Profile/Profile'
import Search               from '../Search/Search'

class App extends Component {

  constructor() {
    super();

    this.logoutHandler = this.logoutHandler.bind(this);
  }

  componentDidMount(){
    //If apik from localStorage, load the profile and set logged
    const apik = localStorage.getItem('apik');
    if(apik){     
      const profile = JSON.parse(localStorage.getItem('profile'));
      LoginAct(profile)
    } 
  }

  logoutHandler(){
    LogoutAct()
    localStorage.removeItem('apik')
    localStorage.removeItem('profile')
  }

  loginHandler(user){
    LoginAct(user)
    localStorage.setItem('apik', user.accessToken)
    localStorage.setItem('profile', JSON.stringify(user.profileObj));
  };

  render() {

    const { logged, profile, tkn } = this.props



    return (
      <div>
        <h3>YoutubeZ</h3>
        {logged && <Profile profile={profile.profileObj} logout={this.logoutHandler} />}

        {this.props.children}
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tkn: state.app.tkn,
  profile: state.app.profile,
  logged: state.app.logged,
});

const mapDispatchToProps = {
  LoginAct,
  LogoutAct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
