import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  }
  handleOnChange(e) {
    this.setState({ comment: e.target.value });
  }
  render() {
    return (
      <div className="comment-box">
        <textarea value={this.state.comment} onChange={this.handleOnChange.bind(this)} />
        <button>Submit Comment</button>
      </div>
    )
  }
}
