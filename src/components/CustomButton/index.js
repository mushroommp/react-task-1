import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = (props) => (
    
        <Button variant={props.buttonVariant} onClick={() => props.onClick()} style={{paddingRight: 20, paddingLeft: 20}}>{props.buttonName}</Button>
    
)

export default CustomButton