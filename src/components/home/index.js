import React, { Component } from 'react'
import {
  Pagination, LocaleProvider, List, DatePicker, WhiteSpace, WingBlank, InputItem,
  Picker, SearchBar,
} from 'antd-mobile';
import { setCookie, getCookie, removeCookie } from 'common/cookie.js'

// import Test from '../test'
import Top from './header'
import Intluniversal from '../intl-universal'

const languages = [
  {
    value: '中国',
    label: '中国',
    language: 'zh-CN',
  },
  {
    value: 'English',
    label: 'English',
    language: 'en-US',
  },
  {
    value: 'Русский',
    label: 'Русский',
    language: 'ru-RU',
  },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: '',
    };
    this.defaultLang = '';
  }

  componentWillMount() {
    if (!getCookie('lang')) {
      let lang = navigator.language;
      if (lang == 'zh') lang = 'zh-CN';
      setCookie("lang", lang);
    }
    const lang = getCookie('lang');
    switch (lang) {
      case 'zh-CN':
      case 'zh': this.defaultLang = '中文'; break;
      case 'en-US': this.defaultLang = 'EN'; break;
    }
  }

  onChange = (value) => {
    this.defaultLang = value[0];
    const lan = languages.find((item) => (
      item.value == this.defaultLang)).language;
    console.log(lan);
    removeCookie('lang');
    setCookie("lang", lan);
    location.reload();
  }

  render() {
    return (
      <div className='header'>
        {/* <Picker
          data={languages}
          onChange={this.onChange}
          cols={1}
          value={[this.defaultLang]}
        >
          <List.Item arrow="horizontal">Choose language</List.Item>
        </Picker> */}

        <div className='co'>
            co
        </div>
        <WhiteSpace />
        <Pagination total={5} current={1} />
      </div>
    )
  }
}
