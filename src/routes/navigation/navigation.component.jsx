import { Fragment,useContext } from "react";
import {Outlet,Link} from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import './navigation.styles.scss';

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/shopping-cart.context";

const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link to="/" className="nav-link">HOME</Link>
                    <Link to="/shop" className="nav-link">SHOP</Link>
                    <Link to="/contact" className="nav-link">CONTACT</Link>
                    <Link to="/about" className="nav-link">ABOUT</Link>
                    {
                        currentUser ?
                        (
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        )
                        :
                        (
                            <Link to="/auth" className="nav-link">SIGN IN</Link>
                        )
                    }
                    <CartIcon/>
                </div>
                { isCartOpen && <CartDropDown/> }
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;