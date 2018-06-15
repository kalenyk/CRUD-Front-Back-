import React from "react";
import {Field, reduxForm} from "redux-form";
import Divider from "material-ui/Divider";
import RaisedButton from "material-ui/RaisedButton";
import {
    required,
    tooExpensive,
    minPrice,
    max_name_length,
    max_description_length,
    number
} from "../../validation/validation";
import {renderInput, renderDropzoneInput} from "./inputs";


class NewProductForm extends React.Component {

    render() {
        return (
            <div className="new-product__wrap">
                <form onSubmit={this.props.handleSubmit} className="new-product__form">
                    <Field name="name" component={renderInput}
                        className="new-product__input"
                        validate={[required, max_name_length]}
                        label="Name"/>
                    <Divider/>
                    <Field name="description" component={renderInput}
                        className="new-product__input"
                        validate={[required, max_description_length]}
                        label="Description"/>
                    <Divider/>

                    <Field name="price" component={renderInput}
                        className="new-product__input"
                        validate={[required, number, tooExpensive, minPrice]}
                        label="Price"/>
                    <Divider/>

                    <Field
                        name="image"
                        component={renderDropzoneInput}
                    />

                    <div className="new-product__button">
                        <RaisedButton label="Create new" primary type="submit"
                            disabled={this.props.pristine || this.props.submitting} />

                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: "new-product",
})(NewProductForm);
