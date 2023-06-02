import React from "react";
import './Button.css' // precisamos referenciar o css do nosso botão.

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return (
        <button
            // a função onClick está acionando 
            onClick={e =>  props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}


