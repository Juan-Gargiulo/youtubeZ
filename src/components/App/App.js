import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'


//actions
import { LoginAct, LogoutAct } from './AppActions.js'

//css
import './App.css';

//components
import Profile from '../Profile/Profile'

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

    const { logged, profile } = this.props

    return (
      <div>
        <h3>YoutubeZ</h3>
        { logged && <Profile profile={profile.profileObj} logout={this.logoutHandler} /> }
        <Link to="/search">search</Link>


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
