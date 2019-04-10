import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import { getStream } from '../../actions';

class StreamShow extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  renderStreaVideo() {
    if (!this.props.streamVideo) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }
    return <div>video</div>;
  }

  renderStreamData() {
    if (!this.props.stream) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    return (
      <Fragment>
        <h3>{this.props.stream.title}</h3>
        <p>{this.props.stream.description}</p>
      </Fragment>
    );
  }

  render() {
    const streamVideo = {
      height: '300px'
    };
    return (
      <div>
        <Segment style={streamVideo}>{this.renderStreaVideo()}</Segment>
        <Segment>{this.renderStreamData()}</Segment>
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
)(StreamShow);
