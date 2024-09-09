import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DialogBox() {
  const [show, setShow] = useState(false);
  const [personName, setPersonName] = useState("NOPE");

  const handleShow = () => {
    console.log("Button opened");
    setPersonName("mahesh sir");
    setShow(true);
  };

  const handleClose = () => {
    console.log("Button closed");
    // setPersonName("Ram kumar");
    setShow(false);
  };

  return (
    <>
      <p>{personName}</p>
      <Button variant="dark" onClick={handleShow}>
        Update Post
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label htmlFor="">Title:</label>
          <input
            type="text"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
          />
          <br />
          <br />

          <input
            type="text"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">Update</Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DialogBox;
