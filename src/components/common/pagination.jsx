import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from "prop-types"

class Pagination extends React.Component {
  render() { 

    const {itemsCount, pageSize, onPageChange, currentPage } = this.props
    const pagesCount = Math.ceil(itemsCount / pageSize);

    if(pagesCount ===1) return null;
    const pages = _.range(1, pagesCount + 1 )

    return (
      <nav aria-label="Page navigation">
        <ul className='pagination m-2'>
          { pages.map(page =>(
            <li className={ page === currentPage ? "page-item active" : "page-item"}  key={page}>
              <a 
                className='page-link' 
                href="#" 
                onClick={ ()=>onPageChange(page)} > {page} </a>
            </li>
          ) )}
        </ul>
      </nav>
    );
  }
}
 
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired , 
  pageSize: PropTypes.number.isRequired , 
  onPageChange: PropTypes.func.isRequired , 
  currentPage: PropTypes.number.isRequired
}

export default Pagination;