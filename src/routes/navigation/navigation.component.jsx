import { Fragment } from "react";
import {Outlet,Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
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
                    <Link to="/auth" className="nav-link">SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;