import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout, register } from '../../store/actions/authenticaActions';
import Login from '../../components/login/login';
import Register from '../../components/register/register';
class User extends Component {
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

    inputChangedHandler = (event, controlName) => {
        const user = {
            ...this.state.user,
            [controlName]: event.target.value
        }
        this.setState({ user });
    }
    userLogin = event =>{
        event.preventDefault();
        this.props.onLogin(this.state.user);
    }
    userRegister = event =>{
        event.preventDefault();
        this.props.onRegister(this.state.user);
    }
    render() {
        const { user, isRegister } = this.state;
        let element = null;
        if (isRegister) {
            element = <Register user={user}
                onRegister={(event) => this.userRegister(event)}
                changed={(event, inputType) => this.inputChangedHandler(event, inputType)}
                switchElement={() => this.setState({ isRegister: false })} />
        } else {
            element = <Login user={user}
                onLogin={(event) => this.userLogin(event)}
                changed={(event, inputType) => this.inputChangedHandler(event, inputType)}
                switchElement={() => this.setState({ isRegister: true })} />
        }
        return (<>
            {element}
        </>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLogin: state.auth.isLogin
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (user) => dispatch(login(user)),
        onRegister: (user) => dispatch(register(user)),
        logout: (user) => dispatch(logout(user)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(User);