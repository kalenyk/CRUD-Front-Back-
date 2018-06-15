import React from "react";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {loginUser} from "../actions/user";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./Header";

class LoginPage extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Header/>
                    <LoginForm onSubmit={(data) => this.props.loginUser(data)}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.user.token
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser(data) {
            dispatch(loginUser(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);