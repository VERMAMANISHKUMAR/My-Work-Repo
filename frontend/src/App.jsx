import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; 
import styled from 'styled-components';

// Importing components
import Navbar from './component/Navbar/index';
import Sidebar from './component/Sidebar/index';
import Dashboard from './pages/Dashboard';
import AccountsList from './pages/AccountsList';
import Inputs from './pages/Inputs';
import MoneyTransferList from './pages/MoneyTransferList';
import Home from './pages/Home';
import DepositList from './pages/DepositList';
import CashTransactions from './pages/CashTransactions';
import CreateAccount from './pages/CreateAccount';
import Footer from './pages/footer';
// ---------------Coupon section---------------------
import CreateCustomerCoupon from './coupens/CreateCustomerCoupon'
import CustomerCouponsList from './coupens/CustomerCouponsList'
import CreateCoupon from './coupens/CreateCoupon'
import CoupensMaster from './coupens/CouponsMaster'
// ---------------Advance----------------------------------
import Advance from './advance/addadvance'
import Advancelist from './advance/advancelist'
// Styled component for the main app layout
const AppContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr; /* Sidebar takes auto width, main content takes remaining space */
  grid-template-rows: auto 1fr; /* Navbar takes auto height, main content takes remaining space */
  grid-template-areas:
    "sidebar navbar"
    "sidebar main";
  height: 100vh; /* Full viewport height */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Sidebar disappears on smaller screens */
    grid-template-areas:
      "navbar"
      "main";
  }
`;

// Styled component for main content area
const MainContent = styled.main`
  grid-area: main; /* Assigning the main content section */
  padding: 20px; /* Adding padding for spacing */
  overflow-y: auto; /* Allows scrolling if content overflows */
`;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // State to manage sidebar visibility

  // Function to toggle sidebar open/close state
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router> {/* Wrapping the app with Router for navigation */}
      <AppContainer>
        {/* Sidebar Component */}
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Navbar Component */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Main Content Section */}
        <MainContent>
          <Routes>
            {/* Sidebar Routes - These routes are accessible via sidebar navigation */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/accountslist" element={<AccountsList />} />
            <Route path="/inputs" element={<Inputs />} />
            <Route path="/moneytransferlist" element={<MoneyTransferList />} />
            <Route path="/createaccount" element={<CreateAccount />} />

            {/* Navbar Routes - These routes are accessible via navbar navigation */}
            <Route path="/home" element={<Home />} />
            <Route path="/depositlist" element={<DepositList />} />
            <Route path="/cashtransactions" element={<CashTransactions />} />
            {/* ------------------Coupon Section------------------------------------ */}
            <Route path="/createcustomer-coupon" element={<CreateCustomerCoupon/>}/>
            <Route path="/customercoupons-list" element={<CustomerCouponsList/>}/>
            <Route path="/create-coupon" element={<CreateCoupon/>}/>
            <Route path='/coupons-master' element={<CoupensMaster/>}/>
            {/* ----------------------Advance-------------------------------------------- */}
            <Route path="/add-advance" element={<Advance/>}/>
            <Route path='/advance-list' element={<Advancelist/>}/>
          </Routes>
        </MainContent>
      </AppContainer>

      {/* Footer Component */}
      <Footer />
    </Router>
  );
}

export default App; // Exporting App component for rendering
