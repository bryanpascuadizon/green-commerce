import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//ACTIONS
import { paginate } from '../../actions/helper/paginationaction';

//CSS
import '../../assets/layout/helper/pagination.css'

const Pagination = ({ itemsPerPage, totalItems, pageComponent, paginate }) => {

    const [currentPage, setCurrentPage] = useState(1);

    const pages = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pages.push(i);
    }

    const switchPage = (pageNumber) => {
        setCurrentPage(pageNumber);

        const lastIndex = pageNumber * itemsPerPage;
        const firstIndex = lastIndex - itemsPerPage

        paginate(firstIndex, lastIndex, pageComponent)

    }

    return (
        <div className="pagination-container">
            <div className="pagination-row">
                {
                    pages.map(page => (
                        <div className={`pagination-item ${currentPage === page ? 'active' : ''}`} onClick={() => switchPage(page)}>{page}</div>
                    ))
                }
            </div>
        </div>
    )
}

Pagination.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired
}

export default connect(null, { paginate })(Pagination);