import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';

import { deleteStream, getStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  renderModalConent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete the stream?';
    }

    return `Are you sure you want to delete stream: ${this.props.stream.id}`;
  }

  render() {
    const modalActions = (
      <Fragment>
        <Button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          color='red'
        >
          <Icon name='trash' /> Delete
        </Button>
        <Button onClick={() => history.push('/')}>
          <Icon name='remove' /> Cancel
        </Button>
      </Fragment>
    );

    return (
      <div>
        Stream Delete
        <Modal
          title='Delete Stream'
          content={this.renderModalConent()}
          actions={modalActions}
          onDismiss={() => history.push('/')}
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
  { deleteStream, getStream }
)(StreamDelete);
