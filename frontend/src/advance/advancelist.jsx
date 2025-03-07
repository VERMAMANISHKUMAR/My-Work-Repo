
import React, { useState } from 'react'; // Importing React and useState hook for state management
import '../assets/Style/Advance/advancelist.css'; 
import {BiHome } from "react-icons/bi";
// MoneyTransferList Component
const MoneyTransferList = () => {
  
 // State variables to manage filters and settings
  
  const [entriesPerPage, setEntriesPerPage] = useState(10); 
  const [searchTerm, setSearchTerm] = useState(''); 

  // Dummy data for money transfers (Replace with actual API calls)
  const transfers = [];

  return (
    <div className="Advance-Payments-List">
      {/* Header Section */}

          <header className="Advancelist-app-header">
                    <div className="Advance-page-title">Advance Payments List</div>
                    <div className="Advance-navigation-links">
                      <a href="#" className="Advance-nav-link-h"><BiHome /> Home</a>
                      <span className="nav-separator">/</span>
                      <a href="#" className="Advance-nav-link-h">Customers List</a>
                      <span className="nav-separator">/</span>
                      <a href="#" className="Advance-nav-link-h">Import Customers </a>
                      <span className="nav-separator">/</span>
                      <a href="#" className="Advance-nav-link-h">Advance Payments List</a>
                    </div>
                </header>


      {/* Filters Section */}
      <div className="Advance-Payments-filters">
        <div className="Advance-Payments-header-list-header">
          <h3>Discount Coupons</h3>
          <button className="Advance-Payments-create-btn"><span style={{fontSize:'20px', fontWeight:'700'}}>+</span> Create Coupon</button>
        </div>
       {/* Table Controls Section */}
       <div className="Advance-Payments-table-controls">
        {/* Entries Per Page Dropdown */}
        <div className="Advance-Payments-Entries-per-page">
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
        <div className="Advance-Payments-Table-actions">
          <button>Copy</button>
          <button>Excel</button>
          <button>PDF</button>
          <button>Print</button>
          <button>CSV</button>
          <button>Columns</button>
          <input type="text" placeholder="Search:" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='Advance-Payments-search-input' />
        </div>
      </div>

      {/* Money Transfer Table */}
      <table className="Advance-Payments-tables">
           <thead>
             <tr>
               <th>ID<svg class="w-[10px] h-[10px] text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"/>
              </svg></th>
               <th>Date <svg class="w-[10px] h-[10px] text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"/>
              </svg></th>
               <th>Customer Name<svg class="w-[10px] h-[10px] text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"/>
              </svg></th>
               <th>Amount<svg class="w-[10px] h-[10px] text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"/>
              </svg></th>
               <th>Paymant Type <svg class="w-[10px] h-[10px] text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"/>
              </svg></th>
               <th>Created by<svg class="w-[10px] h-[10px] text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"/>
              </svg></th>
               <th>Action</th>
             </tr>
           </thead>
        <tbody>
          {/* If no data is available, display a message */}
          {transfers.length === 0 ? (
            <tr>
              <td colSpan="8" className="Advance-Payments-no-data" style={{ textAlign: 'center' }}>No data available in table</td>
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
      <div className="Advance-Payments-pagination">
        <div className="pagination-info">Showing 0 to 0 of 0 entries</div>
        <div className="Advance-Payments-pagination-controls">
          <button className="pagination-btn">Previous</button>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
      </div>

     
    </div>
  );
};

export default MoneyTransferList;
