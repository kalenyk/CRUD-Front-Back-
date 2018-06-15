import React from "react";
import {connect} from "react-redux";
import {GridList, GridTile} from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import CloseButton from "material-ui/svg-icons/navigation/close";
import ImageComponent from "./ImageComponent";

import {deleteProduct} from "../actions/products";


class Products extends React.Component {

    render() {
        return(
            <div className="products-wrap">
                <GridList
                    cellHeight={180}
                    className="products__grid"
                >
                    {this.props.products.map((product) => (
                        <GridTile
                            key={product._id}
                            title={product.name}
                            subtitle={
                                <div>
                                    <div>Price: <b>{product.price}</b></div>
                                    <div>Description: {product.description}</div>
                                    <div>Created by <b>{product.createdBy}</b></div>
                                </div>
                            }

                            actionIcon={this.props.isLoggedIn ? <IconButton onClick={()=>this.props.deleteProduct(product._id)}><CloseButton color="white" /></IconButton> : <div/>}


                        >
                            <ImageComponent src={product.image}/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        isLoggedIn:state.user.isLoggedIn
    };
}
function mapDispatchToProps(dispatch) {
    return{
        deleteProduct(id){
            dispatch(deleteProduct(id));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Products);