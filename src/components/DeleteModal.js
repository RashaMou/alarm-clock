import React from "react";
import Modal from "react-modal";
import { Button } from "reactstrap";

const DeleteModal = (props) => {
  const toggle = () => props.setModal(!props.modal);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div className="modal">
      <Modal isOpen={props.modal} toggle={toggle} style={customStyles}>
        <div className="inner-modal">
          Are you sure you want to delete this alarm?
        </div>
        <div className="modal-buttons">
          <Button color="primary" onClick={toggle}>
            Delete
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
