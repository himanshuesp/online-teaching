import React, { Component } from 'react';
import Helpers from '../../../../core/common/helpers';
import Icon from '../../../../core/common/lib/icon/icon';
import Logo from '../../../../../../static/svg/logo.svg';

class Footer extends Component {

  componentDidMount() {
    Helpers.getAppVersion('.app-version');
  }

  render() {
    return (
      <section className="footer">
        <span>Online Learning Platform <span className="app-version" />
          <Icon glyph={Logo} />
          Node JS Project <a href="https://github.com/himanshuesp/online-teaching"</a>
        </span>
      </section>
    );
  }
}

export default Footer;
