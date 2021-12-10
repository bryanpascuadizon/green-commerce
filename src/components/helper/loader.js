import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//CSS
import { Modal, Spinner } from 'reactstrap'
import '../../assets/layout/loader.css'


const Loader = ({ isProcessing }) => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => { }, [])

    return (
        <Modal fade={false} isOpen={isProcessing} className="loader-container">
            <Spinner color="success" />
        </Modal>

    )
}

Loader.propTypes = {
    isProcessing: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    isProcessing: state.authList.isProcessing
})

export default connect(mapStateToProps)(Loader);