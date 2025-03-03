
import React, { useState } from 'react'; // Importing React and useState hook for state management
import '../assets/Style/Coupon/CouponsMaster.css'; 

// MoneyTransferList Component
const MoneyTransferList = () => {
  
 // State variables to manage filters and settings
  
  const [entriesPerPage, setEntriesPerPage] = useState(10); // Controls number of entries displayed per page
  const [searchTerm, setSearchTerm] = useState(''); // Stores the search term input by user

  // Dummy data for money transfers (Replace with actual API calls)
  const transfers = [];

  return (
    <div className="money-transfer-list">
      {/* Header Section */}
      <div className="header">
        <h2>Discount Coupons <span className="subheader" style={{fontSize:'10px'}}>View/Search Items Brand</span></h2>
        <p>Home<span> / </span><span>Discount Coupons</span></p>
      </div>

      {/* Filters Section */}
      <div className="filters">
        <div className="list-header">
          <h3>Discount Coupons</h3>
          <button className="create-coupon-btn"><span style={{fontSize:'20px', fontWeight:'700'}}>+</span> Create Coupon</button>
        </div>
       {/* Table Controls Section */}
       <div className="table-controls">
        {/* Entries Per Page Dropdown */}
        <div className="Entries-per-page">
          <label>Show</label>
          <select value={entriesPerPage} onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <label>Entries</label>
        </div>

        {/* Table Actions (Export & Search) */}
        <div className="Table-actions">
          <button>Copy</button>
          <button>Excel</button>
          <button>PDF</button>
          <button>Print</button>
          <button>CSV</button>
          <button>Columns</button>
          <input type="text" placeholder="Search:" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='search-input' />
        </div>
      </div>

      {/* Money Transfer Table */}
      <table className="Transfer-tables">
           <thead>
             <tr>
               <th>Occasion Name <svg class="w-[10px] h-[10px] text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"/>
              </svg></th>
               <th>Expire Date <svg class="w-[10px] h-[10px] text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"/>
              </svg></th>
               <th>Value <svg class="w-[10px] h-[10px] text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"/>
              </svg></th>
               <th>Coupon Type <svg class="w-[10px] h-[10px] text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"/>
              </svg></th>
               <th>Coupon Type <svg class="w-[10px] h-[10px] text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"/>
              </svg></th>
               <th>Status <svg class="w-[10px] h-[10px] text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"/>
              </svg></th>
               <th>Action</th>
             </tr>
           </thead>
        <tbody>
          {/* If no data is available, display a message */}
          {transfers.length === 0 ? (
            <tr>
              <td colSpan="8" className="no-data" style={{ textAlign: 'center' }}>No data available in table</td>
            </tr>
          ) : (
            // Map through transfers array to display each transaction row
            transfers.map((transfer) => (
              <tr key={transfer.id}>
                <td>{transfer.transferCode}</td>
                <td>{transfer.transferDate}</td>
                <td>{transfer.referenceNo}</td>
                <td>{transfer.debitAccount}</td>
                <td>{transfer.creditAccount}</td>
                <td>{transfer.amount}</td>
                <td>{transfer.createdBy}</td>
                <td>
                  <button className="action-btn">Action</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination Section */}
      <div className="pagination">
        <div className="pagination-info">Showing 0 to 0 of 0 entries</div>
        <div className="pagination-controls">
          <button className="pagination-btn">Previous</button>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
      </div>

     
    </div>
  );
};

export default MoneyTransferList; // Exporting the component for use
