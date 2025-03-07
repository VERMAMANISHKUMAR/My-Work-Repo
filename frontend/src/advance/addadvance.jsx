import React, { useState } from "react";
import { BiChevronDown, BiChevronUp, BiX, BiHome } from "react-icons/bi";
// import { Link } from "react-router-dom";
import "../assets/Style/Advance/addadvance.css";

const CouponForm = () => {
  const [isOccasionDropdownOpen, setIsOccasionDropdownOpen] = useState(false);
  const [occasionSearchTerm, setOccasionSearchTerm] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const occasionOptions = ["Manish", "Shohan", "Ganesh"];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchOption, setSearchOption] = useState("");
  const [selected, setSelected] = useState(null);
  const amountOptions = ["Cash", "Card", "UPI"];

  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleOccasionSelect = (option) => {
    setSelectedOccasion(option);
    setIsOccasionDropdownOpen(false);
  };

  const handleClearOccasionSelection = () => {
    setSelectedOccasion(null);
  };

  const handleAmountSelect = (amountOption) => {
    setSelected(amountOption);
    setIsDropdownOpen(false);
  };

  const handleClearAmountSelection = () => {
    setSelected(null);
  };

  return (
    <div className="Advance-main-container">
      {/* Top Header */}
       <header className="Advance-app-header">
              <div className="Advance-page-title">New Advance <span style={{fontSize:'10px', color:'dark'}}>Add/Update Brand</span></div>
              <div className="Advance-navigation-links">
                <a href="#" className="Advance-nav-link-h"><BiHome /> Home</a>
                <span className="nav-separator">/</span>
                <a href="#" className="Advance-nav-link-h">Customers List</a>
                <span className="nav-separator">/</span>
                <a href="#" className="Advance-nav-link-h">Advance Payments List </a>
                <span className="nav-separator">/</span>
                <a href="#" className="Advance-nav-link-h">New Advance</a>
              </div>
          </header>

      {/* Main content */}
      <div className="Advance-page-wrapper">
        <div className="Advance-content-wrapper">
          {/* Left side - Form */}
          <div className="Advance-form-container-coupon">
            <div className="Advance-form-header">
              <p>Please Enter Valid Data</p>
            </div>
            <form className="Advance-coupon-form" onSubmit={handleSubmit}>
              {/* Date Field */}
              <div className="Advance-form-group custom-layout">
                <label className="befor-input-label" style={{ marginRight: "78px", fontSize: "15px" }}>
                  Date <span style={{ color: "red" }}>*</span>
                </label>
                <input type="date" required />
              </div>

              {/* Customer Name Dropdown */}
              <div className="Advance-form-group custom-layout">
                <label className="befor-input-label" style={{ fontSize: "15px" }}>
                  Customer Name <span style={{ color: "red" }}>*</span>
                </label>
                <div className="Advance-dropdown-container">
                  <div className="Advance-dropdown-header" onClick={() => setIsOccasionDropdownOpen(!isOccasionDropdownOpen)}>
                    <span>{selectedOccasion || "Walk-in customer"}</span>
                    {selectedOccasion ? (
                      <BiX className="Advance-clear-icon" onClick={handleClearOccasionSelection} />
                    ) : isOccasionDropdownOpen ? (
                      <BiChevronUp />
                    ) : (
                      <BiChevronDown />
                    )}
                  </div>

                  {isOccasionDropdownOpen && (
                    <div className="Advance-dropdown-content">
                      <input
                        type="text"
                        className="Advance-search-input"
                        placeholder="Search..."
                        value={occasionSearchTerm}
                        onChange={(e) => setOccasionSearchTerm(e.target.value)}
                      />
                      <ul className="Advance-dropdown-list">
                        {occasionOptions
                          .filter((option) => option.toLowerCase().includes(occasionSearchTerm.toLowerCase()))
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

              {/* Amount Field */}
              <div className="Advance-form-group custom-layout">
                <label style={{ marginRight: "58px", fontSize: "15px" }}>
                  Amount <span style={{ color: "red" }}>*</span>
                </label>
                <input type="number" placeholder="Enter coupon value" required />
              </div>

              {/* Payment Type Dropdown */}
              <div className="Advance-form-group custom-layout">
                <label className="befor-input-label" style={{ marginRight: '15px', fontSize:'15px'}}>
                  Payment Type <span style={{ color: "red" }}>*</span>
                </label>
                <div className="Advance-dropdown-container">
                  <div className="Advance-dropdown-header" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <span>{selected || "-Select-"}</span>
                    {selected ? (
                      <BiX className="Advance-clear-icon" onClick={handleClearAmountSelection} />
                    ) : isDropdownOpen ? (
                      <BiChevronUp />
                    ) : (
                      <BiChevronDown />
                    )}
                  </div>

                  {isDropdownOpen && (
                    <div className="Advance-dropdown-content">
                      <input
                        type="text"
                        className="Advance-search-input"
                        placeholder="Search..."
                        value={searchOption}
                        onChange={(e) => setSearchOption(e.target.value)}
                      />
                      <ul className="Advance-dropdown-list">
                        {amountOptions
                          .filter((option) => option.toLowerCase().includes(searchOption.toLowerCase()))
                          .map((option, index) => (
                            <li key={index} onClick={() => handleAmountSelect(option)}>
                              {option}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Note Field */}
              <div className="Advance-form-group custom-layout">
                <label style={{ marginRight: "90px", fontSize: "15px" }}>Note</label>
                <textarea placeholder="Enter description"></textarea>
              </div>

              {/* Form Actions */}
        <div className="Advance-form-actions">
          <div style={{ marginRight: '10px' }}>
            <button type="submit" className="btn-save">Save</button>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <button type="button" className="btn-close">Close</button>
          </div>
        </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponForm;
