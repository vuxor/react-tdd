import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

 class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }
  handleOnChange(e) {
    this.setState({ comment: e.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleOnChange.bind(this)} />
        <div>
          <button action="submit">Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default connect(null, actions)(CommentBox);
