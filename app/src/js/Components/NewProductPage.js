import React from "react";
import {connect} from "react-redux";
import {createProduct} from "../actions/products";
import NewProductForm from "./NewProductForm";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./Header";

class NewProductPage extends React.Component {
    constructor() {
        super();
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(data) {
        const Product_page = this;

        function toDataURL(url, callback) {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                let reader = new FileReader();
                reader.onloadend = function () {
                    callback(reader.result);
                };
                reader.readAsDataURL(xhr.response);
            };
            xhr.open("GET", url);
            xhr.responseType = "blob";
            xhr.send();
        }

        toDataURL(data.image[0].preview, function (dataUrl) {
            data.image = dataUrl;
            Product_page.props.createProduct(data);
        });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Header/>
                    <NewProductForm onSubmit={this.submitForm}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        createProduct(data) {
            dispatch(createProduct(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProductPage);