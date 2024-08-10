import React, { useState } from 'react';
import Step1 from './components/step1';
import Step2 from './components/step2';
import Step3 from './components/step3';
import Navigation from './components/navigation';
import useLocalStorage from './components/useLocalStorage';
import './styles/form.css';

const initialData = {
  name: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: ''
};

function App() {
  const [formData, setFormData] = useLocalStorage('formData', initialData);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (validate()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const validate = () => {
    let validationErrors = {};
    if (currentStep === 1) {
      if (!formData.name) validationErrors.name = 'Name is required';
      if (!formData.email) validationErrors.email = 'Email is required';
      if (!formData.phone) validationErrors.phone = 'Phone is required';
    } else if (currentStep === 2) {
      if (!formData.address1) validationErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) validationErrors.city = 'City is required';
      if (!formData.state) validationErrors.state = 'State is required';
      if (!formData.zip) validationErrors.zip = 'Zip Code is required';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return (
    <div className="form-container">
      {currentStep === 1 && <Step1 formData={formData} handleInputChange={handleInputChange} errors={errors} />}
      {currentStep === 2 && <Step2 formData={formData} handleInputChange={handleInputChange} errors={errors} />}
      {currentStep === 3 && <Step3 formData={formData} />}
      <Navigation currentStep={currentStep} handleNext={handleNext} handleBack={handleBack} />
    </div>
  );
}

export default App;
