import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const AddProject = ({ save }) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [purpose, setPurpose] = useState("");
    const [location, setLocation] = useState("");
    const [goal, setGoal] = useState(1);

    const min = 100000000000000000000000;

    const isFormFilled = () => name && image && purpose && location && Number(goal) > min;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                onClick={handleShow}
                variant="dark"
                className="rounded-pill px-0"
                style={{ width: "38px" }}
            >
                <i class="bi bi-plus"></i>
            </Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>New Charity Project</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <FloatingLabel
                            controlId="inputName"
                            label="Charity name"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                placeholder="Enter name of Charity Project"
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="inputUrl"
                            label="Image URL"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Image URL"
                                onChange={(e) => {
                                    setImage(e.target.value);
                                }}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="inputPurpose"
                            label="Purpose"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder="purpose"
                                style={{ height: "80px" }}
                                onChange={(e) => {
                                    setPurpose(e.target.value);
                                }}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="inputLocation"
                            label="Location"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Location"
                                onChange={(e) => {
                                    setLocation(e.target.value);
                                }}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="inputGoal"
                            label="Goal"
                            className="mb-3"
                        >
                            <Form.Control
                                type="number"
                                placeholder="Goal(Min 1 Near)"
                                onChange={(e) => {
                                    setGoal(e.target.value);
                                }}
                            />
                        </FloatingLabel>
                    </Modal.Body>
                </Form>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="dark"
                        disabled={!isFormFilled()}
                        onClick={() => {
                            save({
                                name,
                                image,
                                purpose,
                                location,
                                goal,
                            });
                            handleClose();
                        }}
                    >
                        Save Charity
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

AddProject.propTypes = {
    save: PropTypes.func.isRequired,
};

export default AddProject;