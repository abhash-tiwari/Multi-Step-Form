import React from 'react';

function Step1({ formData, handleInputChange, errors }) {
  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <div>
        <input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <input
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone"
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
    </div>
  );
}

export default Step1;
