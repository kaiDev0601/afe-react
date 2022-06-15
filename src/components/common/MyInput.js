import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const MyInput = ({
    controlId,
    label,
    type,
    placeholder,
    id,
    addOnIcon,
    disabled,
    value
}) => {
    const mControl = (
        type !== "textarea" ? 
            <Form.Control type={type} placeholder={placeholder} disabled={disabled ? true : false}/>
        :
            <Form.Control as="textarea" row={3}/>
    );;

    return (
        <Form.Group className="mb-3" controlId={controlId}>
            { label && <Form.Label>{label}</Form.Label>}
            { addOnIcon ? (
                <InputGroup className="mb-3">
                    { mControl }
                    <InputGroup.Text id={id}>
                        {addOnIcon}
                    </InputGroup.Text>
                </InputGroup>
            ) : (
                mControl
            )}
        </Form.Group>
    );
};



export default MyInput;