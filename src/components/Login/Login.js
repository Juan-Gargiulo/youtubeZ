import React        from 'react';
import GoogleLogin  from 'react-google-login';
import { connect } from 'react-redux'

import { LoginAct } from '../App/AppActions.js'
 
class Login extends React.Component{
 
  constructor (props, context) {
    super(props, context);
  }

  success = (response) => {

    const { LoginAct } = this.props

/*    const { loginHandler } = this.props;
    loginHandler(response);*/
    
    LoginAct(response)

  };

  error = (response) => {
    console.error(response);
  };

  loading = () => {
    console.log('loading');
  }; 
 
  render () {
    return (
      <GoogleLogin
          clientId='661920628577-6vpm7np3aivlf7nj71tnr1tvd2ud5nah.apps.googleusercontent.com'
          scope='profile email https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/userinfo.profile'
          onSuccess={this.success}
          onFailure={this.error}
          onRequest={this.loading}
          offline={false}
          approvalPrompt="force"
          responseType="id_token"
          fetchBasicProfile={true}
          redirectUri="http://localhost:3000"
          // disabled
          // prompt="consent"
          // className='button'
          // style={{ color: 'red' }}
      >
        <span>Login</span>
      </GoogleLogin>
    );
  }
 
}
 
const mapDispatchToProps = {
  LoginAct
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);
