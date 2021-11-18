import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

//CSS
import { Button, CardText } from 'reactstrap'

const QuantityCounter = ({ accumulate, quantity }) => {

    useEffect(() => {
        
    }, [])

    return (
        <div className="accumulator">
            <Button id="decrease" onClick={() => accumulate(false)}>
                -
            </Button>
            <CardText>
                {quantity}
            </CardText>
            <Button id="increase" onClick={() => accumulate(true)}>
                +
            </Button>
        </div>
    )
}

QuantityCounter.propTypes = {
    accumulate: PropTypes.func.isRequired,
    quantity: PropTypes.number.isRequired
}

export default QuantityCounter;