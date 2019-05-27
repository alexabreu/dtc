import React from 'react';
import { Link } from 'gatsby';
import cn from 'classnames';

import Styles from './styles/menu.module.scss';
import IconStyles from './styles/icon.module.scss';
import CloseIcon from './icons/close';

const handleClick = (e) => {
  e.stopPropagation();
}

export default ({isOpen, onClick}) => (
  <menu className={cn(Styles.menu, {[Styles.isOpen]: isOpen})} onClick={handleClick}>
    <CloseIcon className={cn(Styles.close, IconStyles.canClick)} onClick={onClick}/>
    <header>
      <h3>MENU</h3>
    </header>
    <ul>
      <li className={Styles.menuItem}><Link name="Home" aria-label="Link to DTC home page." to="/">Home</Link></li>
      <li className={Styles.menuItem}><Link name="About Us" aria-label="Link to DTC about us page." to="/about">About Us</Link></li>
      <li className={Styles.menuItem}><Link name="Our Team" aria-label="Link to DTC staff page." to="/staff">Our Team</Link></li>
      <li className={Styles.menuItem}><Link name="Contact Us" aria-label="Link to DTC contact page." to="/contact">Contact Us</Link></li>
    </ul>
  </menu>
);