import React, { Component } from 'react';
import './App.css';
import Login                from './Login.component.js'
import Profile              from './Profile.js'
import Search               from './Search.js'

class App extends Component {

  constructor() {
    super();

    this.state = { 
      tkn: null,
      profile: {},
      logged: false,
      data: {}
    }

    this.logoutHandler = this.logoutHandler.bind(this);
  }

  componentDidMount(){
    const apik = localStorage.getItem('apik');
    if(apik){
      const profile = JSON.parse(localStorage.getItem('profile'));
      this.setState({
        tkn : apik,
        profile: profile,
        logged: true
      })
    } 

  }

  logoutHandler(){

    console.log('logout')

    this.setState({
      tkn : null,
      profile: {},
      logged: false
    })

    localStorage.removeItem('apik')
    localStorage.removeItem('profile')
  }

  loginHandler(user){

      this.setState({
        tkn : user.accessToken,
        profile: user.profileObj,
        logged: true
      })

      localStorage.setItem('apik', user.accessToken)
      localStorage.setItem('profile', JSON.stringify(user.profileObj));
  };

  render() {

    const { logged, profile, tkn } = this.state

    console.log(logged);

    return (
      <div>
        { !logged && 
          <Login loginHandler={this.loginHandler.bind(this)}/>
        }
        <Profile profile={profile} logout={this.logoutHandler} />
        <Search tkn={tkn}/> 
        
      </div>
    );
  }
}

export default App;
