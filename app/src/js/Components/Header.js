import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import Logo from "../../../images/logo.png";

class Header extends React.Component{

    render(){
        return (
            <header className="header">
                <img className="header__logo" src={Logo}/>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: "left", vertical: "top"}}
                    targetOrigin={{horizontal: "left", vertical: "top"}}
                >
                    <Link to="/login" className="header__link"><MenuItem primaryText="Login" /></Link>
                    <Link to="/" className="header__link" ><MenuItem primaryText="Products" /></Link>
                    {this.props.isLoggedIn && <Link to="new-product" className="header__link"><MenuItem primaryText="Create new"/></Link>}
                </IconMenu>
            </header>
        );
    }
}



function mapStateToProps(state) {
    return{
        isLoggedIn:state.user.isLoggedIn,
    };
}
function mapDispatchToProps() {
    return{

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);