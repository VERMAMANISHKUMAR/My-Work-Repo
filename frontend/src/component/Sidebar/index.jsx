
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard, MdAccountBalance, MdListAlt } from 'react-icons/md';
import { AiFillFolderOpen, AiOutlineTransaction } from 'react-icons/ai';
import { FaMoneyCheckAlt, FaTicketAlt} from 'react-icons/fa';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import '../../assets/Style/Sidebar.css'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isAdvanceOpen, setIsAdvanceOpen]=useState(false);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-logo" onClick={toggleSidebar}>{isOpen ? 'Dasboard' : 'D'}</div>
      <nav className="sidebar-menu">
      {/* -------------------------------Account------------------------------------- */}
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
      {/* ------------------------------Coupon------------------------------------ */}
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
    {/*----------------------------------Advance-------- --------------------------- */}
        <div className="sidebar-dropdown">
  <div className="sidebar-dropdown-toggle" onClick={() => setIsAdvanceOpen(!isAdvanceOpen)}>
    <FaMoneyCheckAlt />
    {isOpen && <span>Advance</span>}
    {isAdvanceOpen ? <BiChevronUp /> : <BiChevronDown />}
  </div>
  {isAdvanceOpen && (
    <div className="sidebar-dropdown-content">
      <Link to="/add-advance" className="sidebar-link">
        <FaMoneyCheckAlt />
        {isOpen && <span className="pages">Add Advance</span>}
      </Link>
      <Link to="/advance-list" className="sidebar-link">
        <MdListAlt />
        {isOpen && <span className="pages">Advance List</span>}
      </Link>
    </div>
  )}
  </div>
      </nav>
    </div>
  );
};

export default Sidebar;
