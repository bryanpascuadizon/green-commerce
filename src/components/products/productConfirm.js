import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

//ACTION
import { toConfirmProduct } from '../../actions/productsAction'

//CSS
import { Modal, ModalHeader, ModalBody, Button, } from 'reactstrap'
import '../../assets/layout/products/productConfirm.css'

const ProductConfirm = ({ item, isProcessing, showProductConfirmation, quantity, toConfirmProduct }) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (isProcessing == false && showProductConfirmation) {
            setOpen(true)
        }

    }, [isProcessing, showProductConfirmation]);

    const closeModal = () => {
        setOpen(false);

        toConfirmProduct(false)
    }

    //const { name, description, info, img } = item[0];

    if (item.length > 0) {
        return (
            <Modal
                fade={false}
                isOpen={open}
                className="product-confirm-container"
            >
                <ModalHeader>
                    <p>{quantity} new item(s) has been added to your cart</p>
                    <Button onClick={closeModal}>X</Button>
                </ModalHeader>
                <ModalBody>
                    <div className="product-confirm-item">
                        <div className="product-confirm-image">
                            <img src={item[0].img}/>
                        </div>
                        <div className="product-confirm-details">
                            <h5 className="title">{item[0].name}</h5>
                            <p className="info">{item[0].info}</p>
                            <span className="description">{item[0].description}</span>
                            <span className="quantity">Quantity: {quantity}</span>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        )
    } else return ''



}

ProductConfirm.propTypes = {
    isProcessing: PropTypes.bool.isRequired,
    showProductConfirmation: PropTypes.bool.isRequired,
    quantity: PropTypes.number.isRequired,
    toConfirmProduct: PropTypes.func.isRequired,
    item: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    showProductConfirmation: state.productList.showProductConfirmation,
    isProcessing: state.authList.isProcessing,
    item: state.productList.item
});

export default connect(mapStateToProps, { toConfirmProduct })(ProductConfirm)