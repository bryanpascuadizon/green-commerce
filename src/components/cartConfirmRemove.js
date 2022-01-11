import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


//ACTIONS
import { removeFromCart } from '../actions/cartAction';

//CSS
import '../assets/layout/cartConfirmRemove.css'
import { Modal, Button, ModalFooter, ModalBody, ModalHeader } from 'reactstrap';

/*
TO DO:

3. Options for product confirm delete modal should be 'remove' and 'cancel'
4. The 'remove' button will remove the item from the user's cart.

*/

const CartConfirmRemove = ({ confirmRemoveItem, openCloseModal, cartItemId, removeFromCart }) => {

    useEffect(() => {
        console.log(cartItemId);
    }, [])

    const removeItem = () => {
        removeFromCart(cartItemId);
    }

    return (
        <Modal
            isOpen={confirmRemoveItem}
            fade={false}
            className="cart-confirm-container">

            <ModalHeader>
                <p>Removing item(s) from cart</p>
            </ModalHeader>
            <ModalBody>
                <p>Are you sure you want to remove these item(s)?</p>
            </ModalBody>
            <ModalFooter>
                <Button onClick={openCloseModal}>Cancel</Button>
                <Button onClick={removeItem}>Remove</Button>
            </ModalFooter>

        </Modal>
    )

}

CartConfirmRemove.propTypes = {
    openCloseModal: PropTypes.func.isRequired,
    cartItemId: PropTypes.number.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    confirmRemoveItem: PropTypes.bool.isRequired
}

export default connect(null, { removeFromCart })(CartConfirmRemove);