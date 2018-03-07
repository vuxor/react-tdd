import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signin extends Component {
  handleFormSubmit(values) {
    console.log('values', values);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" component="input" type="email" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component="input" type="password" className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signin'
})(Signin);
