import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import FacebookLoginBtn from 'react-facebook-login';
import logo from '../logo.svg';
import { ToolContext } from '../store/context';

const Auth = () => {
  const context = useContext(ToolContext);
  
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  const componentClicked = () => console.log('component clicked');

  const responseFacebook = response => {
    console.log(response);
    context.login();
  };

  let facebookData;

  if (auth) {
    return <Redirect to="/dashboard" />;
  } else {
    facebookData = (
      <FacebookLoginBtn
        appId="181212609920671"
        autoLoad={false}
        fields="name,email,picture,birthday,gender,likes"
        scope="public_profile,user_friends,user_birthday,user_hometown,user_likes"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }

  return (
    <div className="text-center d-flex justify-content-center my-5">
      <form>
        <img src={logo} />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <input
          type="email"
          id="inputEmail"
          className="form-control my-2"
          placeholder="Email address"
          required
          autoFocus
        />
        <input
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Password"
          required
        />
        <button className="btn btn-lg btn-primary btn-block my-3" type="submit">
          Sign in
        </button>
        {facebookData}
        <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
      </form>
    </div>
  );
};

export default Auth;
