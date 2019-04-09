import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h2>Create a stream</h2>
        <StreamForm action={this.onSubmit} values={this.props.formValues} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: state.streams
  };
};

export default connect(
  mapStateToProps,
  { createStream }
)(StreamCreate);
