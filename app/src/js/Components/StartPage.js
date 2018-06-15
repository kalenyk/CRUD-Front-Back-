import React from "react";
import {connect} from "react-redux";
import {getProducts} from "../actions/products";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";


import Header from "./Header";
import Products from "./Products";
import AllProductsInfo from "./AllProductsInfo";

class StartPage extends React.Component {
    constructor() {
        super();
    }


    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const style={
            marginTop:20,
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between"
        };
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Header/>
                    <div style={style}>
                        <AllProductsInfo products={this.props.products}/>
                        <Products products={this.props.products}/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.data,
        isLoggedIn:state.user.isLoggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts() {
            dispatch(getProducts());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);