import React from 'react';
import { Form } from 'semantic-ui-react';

function FormInput({ label, input, meta }) {
  const isError = ({ error, touched }) => {
    if (touched && error) {
      return true;
    }
  };

  return (
    <Form.Field className={isError(meta) ? 'error' : null}>
      <label className='error'>{label}</label>
      <input {...input} />
      {isError(meta) ? <div>{meta.error}</div> : null}
    </Form.Field>
  );
}

export default FormInput;
