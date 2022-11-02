import React from 'react';

import { Button, Modal } from 'antd';

const ErrorModal = props => {
  return (
    // <Modal
    //   onCancel={props.onClear}
    //   header="An Error Occurred!"
    //   show={!!props.error}
    //   footer={<button onClick={props.onClear}>Okay</button>}
    // >
    <Modal title="An Error Occurred!" open={!!props.error} onOk={props.onClear} onCancel={props.onClear}>
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;