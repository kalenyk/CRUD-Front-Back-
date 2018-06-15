import React from "react";
import {connect} from "react-redux";
import {List, ListItem} from "material-ui/List";
import {deleteAllProducts} from "../actions/products";

class AllProductsInfo extends React.Component{
    constructor(){
        super();
        this.countProductsData=this.countProductsData.bind(this);
    }
    countProductsData(){
        if(this.props.products[0] && this.props.products[0]._id) {
            const productsTotal = this.props.products.length;
            let sumTotal,
                averagePrice;
            sumTotal = this.props.products.reduce((sum, product) => {
                return sum + product.price;
            },0);
            averagePrice=Math.ceil((sumTotal/productsTotal)*100)/100;
            return (
                <List>
                    <ListItem className="all-products__item" primaryText={`Total products quantity ${productsTotal}`}/>
                    <ListItem className="all-products__item" primaryText={`Total products price ${sumTotal}`}/>
                    <ListItem className="all-products__item" primaryText={`Average price ${averagePrice}`}/>

                    {this.props.isLoggedIn && <ListItem className="all-products__item"><button   onClick={()=>this.props.deleteAllProducts()}>Delete All</button></ListItem>}
                </List>
            );
        }
        return null;
    }
    render(){
        return(
            <div className={this.countProductsData() ? "all-products" : ""}>
                {this.countProductsData()}
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        isLoggedIn:state.user.isLoggedIn
    };
}
function maDispatchToProps(dispatch) {
    return{
        deleteAllProducts(){
            dispatch(deleteAllProducts());
        }
    };
}
export default connect(mapStateToProps,maDispatchToProps)(AllProductsInfo);