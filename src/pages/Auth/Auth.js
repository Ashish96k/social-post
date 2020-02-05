import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import FacebookLoginBtn from 'react-facebook-login';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { FaFacebookF } from 'react-icons/fa'

import { useStyles } from './Theme';
import logo from '../../logo.svg';
import { ToolContext } from '../../store/context';


const Auth = (props) => {

  const classes = useStyles();

  const context = useContext(ToolContext);
  
  const [auth, setAuth] = useState(false);

  const componentClicked = () => console.log('component clicked');

  const responseFacebook = response => {
    console.log(response);
    context.login();
    props.history.push('/home')
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
        cssClass="btn btn-primary btn-block fb-btn"
        icon={<FaFacebookF />}
      />
    );
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
            <Box mt={2}>
              { facebookData }
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default withRouter(Auth);
