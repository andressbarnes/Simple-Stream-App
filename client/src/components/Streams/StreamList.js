import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Item, Icon } from 'semantic-ui-react';
import { getStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    //call action to get stream list
    this.props.getStreams();
  }

  renderAdminControls = stream => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className='right floated content'>
          <Link
            to={`./streams/edit/${stream.id}`}
            className='ui button primary'
          >
            <Icon name='pencil' /> Edit
          </Link>
          <Link
            to={`./streams/delete/${stream.id}`}
            className='ui button negative'
          >
            <Icon name='trash' /> Delete
          </Link>
        </div>
      );
    }
  };

  renderAdminCreateStream() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right ' }}>
          <Link to='./streams/new' className='ui button primary'>
            Create Stream
          </Link>
        </div>
      );
    }
  }

  renderList = () => {
    return this.props.streams.map((cur, index) => {
      return (
        <Item key={cur.id}>
          {this.renderAdminControls(this.props.streams[index])}
          <i className='large middle aligned icon camera' />
          <div className='content'>
            <Link to={`./streams/${cur.id}`} className='header'>
              {cur.title}
            </Link>
            <div className='description'>{cur.description}</div>
          </div>
        </Item>
      );
    });
  };

  render() {
    return (
      <div>
        <h2> Streams </h2>
        <div className='ui celled list'>{this.renderList()}</div>
        {this.renderAdminCreateStream()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { getStreams }
)(StreamList);
