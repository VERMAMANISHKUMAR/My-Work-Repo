import React, { useState } from "react";
import { BiChevronDown, BiChevronUp, BiX, BiHome, BiRefresh } from "react-icons/bi";
import { Link } from "react-router-dom"; // Import Link
import "../assets/Style/Coupon/CreateCustomerCoupon.css";

const CouponForm = () => {
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
  const [customerSearchTerm, setCustomerSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const customerOptions = ["Walk-in customer", "Cash", "Cash Paid"];

  const [isOccasionDropdownOpen, setIsOccasionDropdownOpen] = useState(false);
  const [occasionSearchTerm, setOccasionSearchTerm] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const occasionOptions = ["Manish", "Shohan", "Ganesh"];

  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  // Function to generate a random coupon code
  const generateCouponCode = () => {
    const code = "COUPON" + Math.random().toString(36).substr(2, 8).toUpperCase();
    setCouponCode(code);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleCustomerSelect = (option) => {
    setSelectedCustomer(option);
    setIsCustomerDropdownOpen(false);
  };

  const handleClearCustomerSelection = () => {
    setSelectedCustomer(null);
  };

  const handleOccasionSelect = (option) => {
    setSelectedOccasion(option);
    setIsOccasionDropdownOpen(false);
  };

  const handleClearOccasionSelection = () => {
    setSelectedOccasion(null);
  };

  return (
    <div className="main-cantenar">
      {/* Top Header */}
      <header className="app-header">
        <div className="page-title">Add/Update Brand</div>
        <div className="navigation-links">
          <a href="/" className="nav-link-h">
            <BiHome /> Home
          </a>
          <span className="nav-separator">-</span>
          <a href="/brands" className="nav-link-h">Brands List</a>
        </div>
      </header>

      {/* Main content */}
      <div className="page-wrapper">
        <div className="content-wrapper">
          {/* Left side - Form */}
          <div className="form-container-coupon">
            <div className="form-header">
              <p>Please Enter Valid Data</p>
            </div>

            <form className="coupon-form" onSubmit={handleSubmit}>
              {/* Customer Dropdown with Search */}
              <div className="form-group custom-layout">
                <label className="manish" style={{ marginRight: '5px' }}>
                  Customer Name<span style={{ color: "red" }}> *</span>
                </label>
                <div className="dropdown-container">
                  <div
                    className="dropdown-header"
                    onClick={() => setIsCustomerDropdownOpen(!isCustomerDropdownOpen)}
                  >
                    <span>{selectedCustomer || "Walk-in customer"}</span>
                    {selectedCustomer ? (
                      <BiX className="clear-icon" onClick={handleClearCustomerSelection} />
                    ) : isCustomerDropdownOpen ? (
                      <BiChevronUp />
                    ) : (
                      <BiChevronDown />
                    )}
                  </div>

                  {isCustomerDropdownOpen && !selectedCustomer && (
                    <div className="dropdown-content">
                      <input
                        type="text"
                        className="search-input"
                        value={customerSearchTerm}
                        onChange={(e) => setCustomerSearchTerm(e.target.value)}
                      />
                      <ul className="dropdown-list">
                        {customerOptions
                          .filter((option) =>
                            option.toLowerCase().includes(customerSearchTerm.toLowerCase())
                          )
                          .map((option, index) => (
                            <li key={index} onClick={() => handleCustomerSelect(option)}>
                              {option}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Occasion Dropdown with Search */}
              <div className="form-group custom-layout">
                <label className="befor-input-label" style={{ marginRight: '10px' }}>
                  Occasion Name<span style={{ color: "red" }}>*</span>
                </label>
                <div className="dropdown-container">
                  <div
                    className="dropdown-header"
                    onClick={() => setIsOccasionDropdownOpen(!isOccasionDropdownOpen)}
                  >
                    <span>{selectedOccasion || "No Record Found"}</span>
                    {selectedOccasion ? (
                      <BiX className="clear-icon" onClick={handleClearOccasionSelection} />
                    ) : isOccasionDropdownOpen ? (
                      <BiChevronUp />
                    ) : (
                      <BiChevronDown />
                    )}
                  </div>

                  {isOccasionDropdownOpen && !selectedOccasion && (
                    <div className="dropdown-content">
                      <input
                        type="text"
                        className="search-input"
                        value={occasionSearchTerm}
                        onChange={(e) => setOccasionSearchTerm(e.target.value)}
                      />
                      <ul className="dropdown-list">
                        {occasionOptions
                          .filter((option) =>
                            option.toLowerCase().includes(occasionSearchTerm.toLowerCase())
                          )
                          .map((option, index) => (
                            <li key={index} onClick={() => handleOccasionSelect(option)}>
                              {option}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Coupon Code Input with Icon */}
              <div className="form-group custom-layout">
                <label style={{ marginRight: '20px' }}>Coupon Code <span style={{ color: 'red' }}>*</span></label>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <BiRefresh
                    className="icon-refresh"
                    onClick={generateCouponCode}
                    title="Generate Coupon Code"
                  />
                </div>
              </div>

              {/* Other Form Fields */}
              <div className="form-group custom-layout">
                <label className="befor-input-label" style={{ marginRight: '45px' }}>Expire Date</label>
                <input type="date" />
              </div>
              <div className="form-group custom-layout">
                <label style={{ marginRight: '29px' }}>Coupon Value</label>
                <input type="number" placeholder="Enter coupon value" />
              </div>
              <div className="form-group custom-layout">
                <label style={{ marginRight: '33px', textAlign: 'right' }}>Coupon Type</label>
                <input type="text" placeholder="Enter coupon type" />
              </div>
              <div className="form-group custom-layout">
                <label style={{ marginRight: '46px' }}>Description</label>
                <textarea placeholder="Enter description"></textarea>
              </div>
            </form>
          </div>
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <div style={{ marginRight: '10px' }}>
            <button type="submit" className="btn-save">Save</button>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <button type="button" className="btn-close">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponForm;
