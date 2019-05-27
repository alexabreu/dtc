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
      <li className={Styles.menuItem}><Link to="/">Home</Link></li>
      <li className={Styles.menuItem}><Link to="/about">About Us</Link></li>
      <li className={Styles.menuItem}><Link to="/staff">Our Team</Link></li>
      <li className={Styles.menuItem}><Link to="/contact">Contact Us</Link></li>
    </ul>
  </menu>
);