import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'semantic-ui-react';

import FormInput from '../../Forms/FormInput';

class StreamForm extends Component {
  renderInput(formProps) {
    return <FormInput {...formProps} />;
  }

  onSubmit = formValues => {
    this.props.action(formValues);
  };

  render() {
    return (
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

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
