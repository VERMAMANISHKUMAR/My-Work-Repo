import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
// import { Link } from "react-router-dom"; // Import Link
import "../assets/Style/Coupon/CreateCustomerCoupon.css";

const CouponForm = () => {
  
  const [formData, setFormData] = useState({});
  
  // Function to generate a random coupon code
 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="main-cantenar">
      {/* Top Header */}
      <header className="app-header">
        <div className="page-title">Discount Coupon <span style={{fontSize:'10px', color:'dark'}}>Add/Update Coupon</span></div>
        <div className="navigation-links">
          <a href="/" className="nav-link-h">
            <BiHome /> Home
          </a>
          <span className="nav-separator">/</span>
          <a href="/brands" className="nav-link-h">Discount Coupons <span>/ Discount Coupon</span></a>
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
            
          
              {/* Other Form Fields */}
              <div className="form-group custom-layout">
                <label style={{ marginRight: '1px' }}>Occasion Name<span style={{ color: "red" }}> *</span></label>
                <input type="number" placeholder="Enter coupon value" />
              </div>
              <div className="form-group custom-layout">
                <label className="befor-input-label" style={{ marginRight: '32px' }}>Expire Date<span style={{ color: "red" }}> *</span></label>
                <input type="date" />
              </div>
              <div className="form-group custom-layout">
                <label style={{ marginRight: '17px' }}>Coupon Value<span style={{ color: "red" }}> *</span></label>
                <input type="number" placeholder="Enter coupon value" />
              </div>
              <div className="form-group custom-layout">
                <label style={{ marginRight: '22px', textAlign: 'right' }}>Coupon Type<span style={{ color: "red" }}> *</span></label>
                <input type="text" placeholder="Enter coupon type" />
              </div>
              <div className="form-group custom-layout">
                <label style={{ marginRight: '48px' }}>Description</label>
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
