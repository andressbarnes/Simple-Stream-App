import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';

import { createStream } from '../../actions';
import FormInput from '../Forms/FormInput';

class StreamCreate extends Component {
  renderInput(formProps) {
    return <FormInput {...formProps} />;
  }

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Form.Group widths='equal'>
            <Field name='title' label='Title' component={this.renderInput} />

            <Field
              name='description'
              label='Description'
              component={this.renderInput}
            />
          </Form.Group>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Please enter a title';
  }
  if (!formValues.description) {
    errors.description = 'Please enter a description';
  }

  return errors;
};

const mapStateToProps = state => {
  return {
    streams: state.streams
  };
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(
  mapStateToProps,
  { createStream }
)(formWrapped);
