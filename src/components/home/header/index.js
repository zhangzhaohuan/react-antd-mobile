import React, { Component } from 'react'
import { Button } from 'antd-mobile';

import { setCookie, getCookie } from 'common/cookie.js'


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.defaultLan = ''
  }
  changeLanguage = (e) => {
    setCookie('lang', e);
    window.location.reload();
  }

  componentWillMount() {
    if (!getCookie('lang')) {
      let lang = window.navigator.language;
      if (lang == 'zh') lang = 'zh-CN';
      setCookie("lang", lang);
    }
    this.defaultLan = getCookie('lang');
  }

  login = () => {
    const { history } = this.props;
    history.push('/login');
  }

  render() {
    return (
      <div>
        <Button onClick={this.login} >登陆</Button>
      </div>
    )
  }
}
