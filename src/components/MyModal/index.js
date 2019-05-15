import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const MyModal = (props) => (
    <Modal show={props.showProps} onHide={props.onHideProps} >
        <Modal.Header closeButton>
            <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{backgroundImage: props.backgroundColor}}>
            <p style={{color: 'white'}}>{props.modalBodyText}</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={() => props.onClose()}>Close</Button>
        </Modal.Footer>
    </Modal>
)

export default MyModal
