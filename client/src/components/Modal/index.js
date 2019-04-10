import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'semantic-ui-react';

const index = props => {
  const { title, content, actions, onDismiss } = props;
  return ReactDOM.createPortal(
    <div onClick={() => onDismiss()}>
      <Modal onClick={e => e.stopPropagation()} open={true} size='small'>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          <p>{content}</p>
        </Modal.Content>
        <Modal.Actions>{actions}</Modal.Actions>
      </Modal>
    </div>,
    document.querySelector('#modal')
  );
};

export default index;
