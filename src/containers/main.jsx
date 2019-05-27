import React, { Component } from 'react';
import { Link } from 'gatsby';
import cn from 'classnames';

import Logo from '../components/logo';
import Menu from '../components/menu';
import MenuIcon from '../components/icons/menu';
import Footer from '../components/footer';

import Styles from './styles/main.module.scss';
import LogoStyles from '../components/styles/logo.module.scss';
import IconStyles from '../components/styles/icon.module.scss';
import MenuStyles from '../components/styles/menu.module.scss';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    }
  }

  handleMenuClick = (e) => {
    e.preventDefault();

    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  closeMenu = () => {
    if (!this.state.isMenuOpen) { return };

    this.setState({ isMenuOpen: false });
  }

  render() {
    const {title, description, children} = this.props;

    return (
      <>
        <nav>
          <Menu isOpen={this.state.isMenuOpen} onClick={this.handleMenuClick} />
        </nav>
        <article
          className={cn(Styles.container, {[Styles.isMenuOpen]: this.state.isMenuOpen})}
          onClick={this.closeMenu}
        >
          <header>
            <Link to="/"><Logo className={LogoStyles.canClick}/></Link>
            <h1>{title}</h1>
            <p>{description}</p>
            <MenuIcon className={cn(IconStyles.canClick, MenuStyles.menuButton)} onClick={this.handleMenuClick}/>
          </header>
          <main>
            {children}
          </main>
        </article>
        <Footer />
      </>
    );
  }
}

export default Main;
