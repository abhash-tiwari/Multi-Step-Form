import React from 'react';

function Step3({ formData }) {
  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <div>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
      </div>
      <div>
        <h3>Address Information</h3>
        <p><strong>Address Line 1:</strong> {formData.address1}</p>
        <p><strong>Address Line 2:</strong> {formData.address2}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>State:</strong> {formData.state}</p>
        <p><strong>Zip Code:</strong> {formData.zip}</p>
      </div>
    </div>
  );
}

export default Step3;
