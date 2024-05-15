import React, { useState } from 'react';
import "./changepassword.css";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
    // Add your logic for handling form submission here
  };

  return (
    <body>
   
  <div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="text" name required />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name required />
      <label>Password</label>
    </div>
    <a href="#">
      <span />
      <span />
      <span />
      <span />
      Submit
    </a>
  </form>
</div>


    
    </body>
  );
}

export default ChangePassword;
