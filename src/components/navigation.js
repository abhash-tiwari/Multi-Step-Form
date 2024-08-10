import React from 'react';

function Navigation({ currentStep, handleNext, handleBack }) {
  return (
    <div className="navigation">
      {currentStep > 1 && <button onClick={handleBack}>Back</button>}
      {currentStep < 3 ? (
        <button onClick={handleNext}>Next</button>
      ) : (
        <button onClick={() => alert('Form Submitted!')}>Submit</button>
      )}
    </div>
  );
}

export default Navigation;
