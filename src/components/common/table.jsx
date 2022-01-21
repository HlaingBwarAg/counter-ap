import React, { Component } from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';

const Table = ({ columns, sortColumn, onSort, rows }) => {
  return ( 
    <table className='table table-striped'>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody rows={rows} columns={columns}/>
    </table > 
   );
}
 
export default Table;
