// import { useState } from 'react';
// import { MdDashboard, MdAccountBalance } from 'react-icons/md';
// import { AiFillFolderOpen, AiOutlineTransaction } from 'react-icons/ai';
// import { FaMoneyCheckAlt, FaTicketAlt } from 'react-icons/fa'; // New coupon icon
// import { BiChevronDown, BiChevronUp } from 'react-icons/bi'; // Icons for dropdown toggle
// import {
//   SidebarContainer,
//   Logo as SidebarLogo,
//   SidebarToggle as CloseButton,
//   SidebarMenu,
//   SidebarLink,
//   SidebarDropdown,
//   SidebarDropdownToggle,
//   SidebarDropdownContent,
// } from './SidebarStyles';

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const [isAccountOpen, setIsAccountOpen] = useState(false);
//   const [isCouponOpen, setIsCouponOpen] = useState(false);

//   return (
//     <SidebarContainer isOpen={isOpen}>
//       <SidebarLogo>
//         {isOpen ? 'Account' : 'A'}
//       </SidebarLogo>

//       <SidebarMenu>
//         {/* Account Section with Dropdown */}
//         <SidebarDropdown>
//           <SidebarDropdownToggle onClick={() => setIsAccountOpen(!isAccountOpen)}>
//             <MdAccountBalance />
//             <span>Account</span>
//             {isAccountOpen ? <BiChevronUp /> : <BiChevronDown />}
//           </SidebarDropdownToggle>
//           {isAccountOpen && (
//             <SidebarDropdownContent>
//               <SidebarLink to="/createaccount" isOpen={isOpen} activeClassName="active">
//                 <MdAccountBalance />
//                 <span>Create Account</span>
//               </SidebarLink>
//               <SidebarLink to="/accountslist" isOpen={isOpen} activeClassName="active">
//                 <MdDashboard />
//                 <span>Account List</span>
//               </SidebarLink>
//               <SidebarLink to="/moneytransferlist" isOpen={isOpen} activeClassName="active">
//                 <AiFillFolderOpen />
//                 <span>Money Transfer List</span>
//               </SidebarLink>
//               <SidebarLink to="/depositlist" isOpen={isOpen} activeClassName="active">
//                 <FaMoneyCheckAlt />
//                 <span>Deposit List</span>
//               </SidebarLink>
//               <SidebarLink to="/cashtransactions" isOpen={isOpen} activeClassName="active">
//                 <AiOutlineTransaction />
//                 <span>Cash Transaction</span>
//               </SidebarLink>
//             </SidebarDropdownContent>
//           )}
//         </SidebarDropdown>

//         {/* Coupon Section with New Icon */}
//         <SidebarDropdown>
//           <SidebarDropdownToggle onClick={() => setIsCouponOpen(!isCouponOpen)}>
//             <FaTicketAlt />
//             <span>Coupon</span>
//             {isCouponOpen ? <BiChevronUp /> : <BiChevronDown />}
//           </SidebarDropdownToggle>
//           {isCouponOpen && (
//             <SidebarDropdownContent>
//               <SidebarLink to="/createcustomer-coupon" isOpen={isOpen} activeClassName="active">
//                 <FaTicketAlt />
//                 <span>Create Customer Coupon</span>
//               </SidebarLink>
//               <SidebarLink to="/customercoupons-list" isOpen={isOpen} activeClassName="active">
//                 <MdDashboard />
//                 <span>Customer Coupons List</span>
//               </SidebarLink>
//               <SidebarLink to="/create-coupon" isOpen={isOpen} activeClassName="active">
//                 <AiFillFolderOpen />
//                 <span>Create Coupon</span>
//               </SidebarLink>
//               <SidebarLink to="/coupons-master" isOpen={isOpen} activeClassName="active">
//                 <FaMoneyCheckAlt />
//                 <span>Coupons Master</span>
//               </SidebarLink>
//             </SidebarDropdownContent>
//           )}
//         </SidebarDropdown>
//       </SidebarMenu>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;

// ------------------------------
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard, MdAccountBalance } from 'react-icons/md';
import { AiFillFolderOpen, AiOutlineTransaction } from 'react-icons/ai';
import { FaMoneyCheckAlt, FaTicketAlt } from 'react-icons/fa';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import '../../assets/Style/Sidebar.css'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-logo" onClick={toggleSidebar}>{isOpen ? 'Dasboard' : 'D'}</div>

      <nav className="sidebar-menu">
        <div className="sidebar-dropdown">
          <div className="sidebar-dropdown-toggle" onClick={() => setIsAccountOpen(!isAccountOpen)}>
            <MdAccountBalance />
            {isOpen && <span>Account</span>}
            {isAccountOpen ? <BiChevronUp /> : <BiChevronDown />}
          </div>
          {isAccountOpen && (
            <div className="sidebar-dropdown-content">
              <Link to="/createaccount" className="sidebar-link"><MdAccountBalance />{isOpen && <span className='pages'>Create Account</span>}</Link>
              <Link to="/accountslist" className="sidebar-link"><MdDashboard />{isOpen && <span className='pages'>Account List</span>}</Link>
              <Link to="/moneytransferlist" className="sidebar-link"><AiFillFolderOpen />{isOpen && <span className='pages'>Money Transfer List</span>}</Link>
              <Link to="/depositlist" className="sidebar-link"><FaMoneyCheckAlt />{isOpen && <span className='pages'>Deposit List</span>}</Link>
              <Link to="/cashtransactions" className="sidebar-link"><AiOutlineTransaction />{isOpen && <span className='pages'>Cash Transaction</span>}</Link>
            </div>
          )}
        </div>

        <div className="sidebar-dropdown">
          <div className="sidebar-dropdown-toggle" onClick={() => setIsCouponOpen(!isCouponOpen)}>
            <FaTicketAlt />
            {isOpen && <span>Coupon</span>}
            {isCouponOpen ? <BiChevronUp /> : <BiChevronDown />}
          </div>
          {isCouponOpen && (
            <div className="sidebar-dropdown-content">
              <Link to="/createcustomer-coupon" className="sidebar-link"><FaTicketAlt />{isOpen && <span className='pages'>Create Customer Coupon</span>}</Link>
              <Link to="/customercoupons-list" className="sidebar-link"><MdDashboard />{isOpen && <span className='pages'>Customer Coupons List</span>}</Link>
              <Link to="/create-coupon" className="sidebar-link"><AiFillFolderOpen />{isOpen && <span className='pages'>Create Coupon</span>}</Link>
              <Link to="/coupons-master" className="sidebar-link"><FaMoneyCheckAlt />{isOpen && <span className='pages'>Coupons Master</span>}</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
