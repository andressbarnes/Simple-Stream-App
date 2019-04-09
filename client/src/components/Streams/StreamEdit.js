import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStream } from '../../actions';

class StreamsEdit extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    console.log(this.props.stream);
    if (!this.props.stream) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <h2>Edit stream</h2>
        <div>{this.props.stream.id}</div>
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
  { getStream }
)(StreamsEdit);
