import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { logout } from '../../store/actions/authenticaActions';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            path: '/'
        }
    }
    componentDidMount() {
    }
    render() {
        let authRedirect = null;
        if (!this.props.isAuthenticated) {
            //console.log(this.props);
            authRedirect = <Redirect to="/" />;
        }
        let gameRedirect = null;
        if (this.state.redirect) {
            gameRedirect = <Redirect to={this.state.path} />;
        }
        const classes = makeStyles(theme => ({
            button: {
                margin: theme.spacing(1),
            },
            input: {
                display: 'none',
            },
        }));
        return (<div>
            {authRedirect}
            {gameRedirect}
            <Button variant="contained" className={classes.button} onClick={() => this.setState({ path: 'online', redirect: true })}>
                Chơi online
      </Button>
            <Button variant="contained" className={classes.button} onClick={() => this.setState({ path: 'offline', redirect: true })}>
                Chơi với máy
      </Button>
            <Button variant="contained" className={classes.button} onClick={this.props.logout}>
                Đăng xuất
      </Button>
        </div>
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
        logout: (user) => dispatch(logout(user)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);