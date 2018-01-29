import React, { Component } from 'react';

import Header from './header';

import CommentBox from './comment_box';
import CommentList from './comment_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
