import React from "react";
import { connect } from "react-redux";
import { selectCartHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user-selector';

import { createStructuredSelector } from "reselect";

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown  from '../cart-dropdown/cart-dropdown';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from "../../firebase/firebase.utils";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header-style";

// import './header.scss';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {
        currentUser
        ?
        // as div is for style purposes
          <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>
        : <OptionLink to='/signin'>Sign In</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
);

const mapStateProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateProps)(Header);

/*
after style-components

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        currentUser
        ?
          (<div className='option' onClick={() => auth.signOut()}>Sign Out</div>)
        : (<Link className='option' to='/signin'>Sign In</Link>)
      }
      <CartIcon />
    </div>
    {
      hidden ? null :
      <CartDropdown />
    }
  </div>
);
*/