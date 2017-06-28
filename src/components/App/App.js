import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, history } from 'react-router-dom'
import API from '../../api.js'


//actions
import { LoginAct, LogoutAct } from './AppActions.js'

//css
import './App.css';

//components
import Header from './Header.js'
import Profile from '../Profile/Profile.js'
import Login from '../Login/Login.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  componentWillMount(){
    //If apik from localStorage, load the profile and set logged
    const apik = localStorage.getItem('apik');
    if(apik){     
      const profile = JSON.parse(localStorage.getItem('profile'));
      LoginAct(profile)
    } 
  }

  logoutHandler(){    
    localStorage.removeItem('apik')
    localStorage.removeItem('profile')

    this.props.LogoutAct()

    this.props.history.push('/login')
  }

  loginHandler(user){
    this.props.LoginAct(user)
    localStorage.setItem('apik', user.accessToken)
    localStorage.setItem('profile', JSON.stringify(user.profileObj));
  };

  render() {
    
    const { logged, profile, children } = this.props
    
    return (
      <div>
          <div className="row">
            <div className="col-md-2 text-center">
              <h3>YoutubeZ</h3>
              { !logged && <Login/> }
              { logged && <Profile profile={profile.profileObj} logout={this.logoutHandler} /> }
              <Header logged={logged}/>
            </div>
            <div className="col-md-10">
              {children}
            </div>
          </div>
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
