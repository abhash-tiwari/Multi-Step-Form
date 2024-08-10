import React from 'react';

function Step2({ formData, handleInputChange, errors }) {
  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <div>
        <input
          name="address1"
          value={formData.address1}
          onChange={handleInputChange}
          placeholder="Address Line 1"
        />
        {errors.address1 && <p className="error">{errors.address1}</p>}
      </div>
      <div>
        <input
          name="address2"
          value={formData.address2}
          onChange={handleInputChange}
          placeholder="Address Line 2"
        />
      </div>
      <div>
        <input
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="City"
        />
        {errors.city && <p className="error">{errors.city}</p>}
      </div>
      <div>
        <input
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          placeholder="State"
        />
        {errors.state && <p className="error">{errors.state}</p>}
      </div>
      <div>
        <input
          name="zip"
          value={formData.zip}
          onChange={handleInputChange}
          placeholder="Zip Code"
        />
        {errors.zip && <p className="error">{errors.zip}</p>}
      </div>
    </div>
  );
}

export default Step2;
