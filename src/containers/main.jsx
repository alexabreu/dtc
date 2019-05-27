import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
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
    const {title, description, link = '', children} = this.props;

    const fullTitle = title === 'Downeast Treatment Center' ? title : `Downeast Treatment Center | ${title}`;

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="en" amp />
          <title>{fullTitle}</title>
          <link rel="canonical" href={`http://dtcme.org${link}`} />
          <meta name="description" content='The Downeast Treatment Center is the hub of a " hub and spoke" treatment model for substance use conditions developed by the Downeast Treatment Network partnership. As a treatment hub, the Downeast Treatment Center offers comprehensive medication assisted treatment (MAT) services, with integrated behavioral health and medication supervision for the treatment of substance use conditions, including opioid use disorder. We offer help and hope to individuals who are struggling with chemical dependency, addiction, or substance use.' />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#29abe2"/>
          <meta name="msapplication-TileColor" content="#2b5797"/>
          <meta name="theme-color" content="#ffffff"/>
        </Helmet>
        <nav>
          <Menu isOpen={this.state.isMenuOpen} onClick={this.handleMenuClick} />
        </nav>
        <article
          className={cn(Styles.container, {[Styles.isMenuOpen]: this.state.isMenuOpen})}
          onClick={this.closeMenu}
        >
          <header>
            <Link to="/" name="Link to Home" aria-label="Link to DTC home page."><Logo className={LogoStyles.canClick}/></Link>
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
