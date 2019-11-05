import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, logout, register, googleLogin, facebookLogin } from '../../store/actions/authenticaActions';
import Login from './login/login';
import Register from './register/register';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: '',
            },
            isRegister: false
        }
    }
    componentDidMount() {
        console.log(this.props);
    }
    inputChangedHandler = (event, controlName) => {
        const user = {
            ...this.state.user,
            [controlName]: event.target.value
        }
        this.setState({ user });
    }
    userLogin = event => {
        event.preventDefault();
        this.props.onLogin(this.state.user);
    }
    userRegister = event => {
        event.preventDefault();
        this.props.onRegister(this.state.user);
    }
    onFailure = e => {
        console.log(e);
    }
    onGoogleLogin = response => {
        console.log(response);
        this.props.googleLoginPress(response);
    }
    onFacebookLogin = response => {
        console.log(response);
        this.props.onFbCallback(response);
    }
    render() {
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            console.log(this.props);
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }
        const { user, isRegister } = this.state;
        let element = null;
        if (isRegister) {
            element = <Register user={user}
                error={this.props.error}
                errMsg={this.props.errMsg}
                onRegister={(event) => this.userRegister(event)}
                changed={(event, inputType) => this.inputChangedHandler(event, inputType)}
                switchElement={() => this.setState({ isRegister: false })}
            />
        } else {
            element = <Login user={user}
                error={this.props.error}
                errMsg={this.props.errMsg}
                onLogin={(event) => this.userLogin(event)}
                changed={(event, inputType) => this.inputChangedHandler(event, inputType)}
                switchElement={() => this.setState({ isRegister: true })}
                onSuccess={(response) => this.onGoogleLogin(response)}
                onFailure={this.props.onFailure}
                onFacebookCallback={(response) => this.onFacebookLogin(response)}
            />
        }
        return (<>
            {authRedirect}

            {element}

        </>
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        authRedirectPath: state.auth.authRedirectPath,
        error: state.auth.error,
        errMsg: state.auth.errMsg,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (user) => dispatch(login(user)),
        onRegister: (user) => dispatch(register(user)),
        logout: (user) => dispatch(logout(user)),
        googleLoginPress: (response) => dispatch(googleLogin(response)),
        onFbCallback: (response) => dispatch(facebookLogin(response))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);