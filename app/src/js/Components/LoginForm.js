import React from "react";
import {Field, reduxForm} from "redux-form";
import Divider from "material-ui/Divider";
import {renderInput} from "./inputs";
import {max_name_length, required} from "../../validation/validation";
import RaisedButton from "material-ui/RaisedButton";

class LoginForm extends React.Component {
    render() {
        return (
            <div className="login-form__wrap">
                <form onSubmit={this.props.handleSubmit}>
                    <Field name="name" component={renderInput}
                        className="new-product__input"
                        validate={[required, max_name_length]}
                        label="Name"/>
                    <Divider/>
                    <Field name="password" component={renderInput}
                        className="new-product__input"
                        validate={[required, max_name_length]}
                        label="Password"/>
                    <Divider/>
                    <RaisedButton label="Login" primary type="submit"
                        disabled={this.props.pristine || this.props.submitting}/>

                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: "login"
})(LoginForm);