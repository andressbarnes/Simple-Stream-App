import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStream, updateStream } from '../../actions';

import StreamForm from './Forms/StreamForm';

class StreamsEdit extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.updateStream(this.props.stream.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <h2>Strea Edit</h2>
        <StreamForm
          action={this.onSubmit}
          initialValues={_.pick(this.props.stream, 'title', 'description')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { getStream, updateStream }
)(StreamsEdit);
