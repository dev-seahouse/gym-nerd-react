import React, { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { withRouter } from 'react-router-dom';
import './footer.styles.scss';
import CollectionsOverview from './../collections-overview/collections-overview.component';

const Divider = () => (
  <div className="divider">
    <h1>Exclusive deals and exciting store updates coming soon ..</h1>
  </div>
);

const Footer = ({ location: { pathname } }) => (
  <Fragment>
    {pathname === '/' && <Divider />}
    <footer className="footer">
      <div className="brand">
        <span>GYM NERD</span>
        <Logo className="logo"></Logo>
      </div>
    </footer>
    <div className="copyright">
      Designed 2020 ©{' '}
      <a href="https://github.com/dev-seahouse">Seahouse Studio</a> | All Rights
      Reserved
    </div>
  </Fragment>
);

export default withRouter(Footer);
