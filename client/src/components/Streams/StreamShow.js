import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import { getStream } from '../../actions';

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  //lifecycle methods
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getStream(id);

    this.renderStreamVideo();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  componentDidUpdate() {
    this.renderStreamVideo();
  }

  renderStreamVideo() {
    if (this.player || !this.props.stream) {
      return;
    }

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
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
    return (
      <div>
        <Segment>
          <video
            ref={this.videoRef}
            style={{ width: '100%' }}
            controls={true}
          />
        </Segment>
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
