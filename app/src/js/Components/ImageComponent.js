import React from "react";

export default class ImageComponent extends React.Component{
    render(){
        return(
            <img className="product__image" src={this.props.src}/>
        );
    }
}