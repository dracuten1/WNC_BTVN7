import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';


const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn(props) {
    const classes = useStyles();
    const { username, password, onLogin, switchElement } = props;
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Đăng nhập
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        error={props.error}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Tên đăng nhập"
                        name="username"
                        value={username}
                        onChange={(event) => props.changed(event, "username")}
                        autoFocus
                    />
                    <TextField
                        error={props.error}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mật khẩu"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => props.changed(event, "password")}
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        onClick={onLogin}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Đăng nhập
          </Button>
                    <Grid container>
                        <Grid item onClick={switchElement}>
                            <Link onClick={switchElement}>
                                Chưa có tài khoản? Đăng ký
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <div>
                <FacebookLogin
                        appId="481186559372148"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={(response)=>props.onFacebookCallback(response)} />
                <GoogleLogin
                clientId="690822563928-r8kplbgfdmtbe7a362b7jrfd0bhuhk40.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={(response)=>props.onSuccess(response)}
                onFailure={props.onFailure}
            />
            </div>
        </Container>
    );
}