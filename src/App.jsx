import React, {useState} from "react";
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';
import AddOns from './components/AddOns';
import FinishingUp from './components/FinishingUp';
import SuccessMessage from './components/SuccessMessage';
import StepLayout from "./components/StepLayout"; 
import "./index.css";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    selectedPlan: [],
    addOns: [],
    finishingUp: [],
  });

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData}));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const goToStep = (setNum) => setStep(setNum);

  const [confirmed, setConfirmed] = useState(false);

  const startNew = () => {
    setConfirmed(false);
    setStep(1);
    setFormData({
      name: "",
      email: "",
      tel: "",
      selectedPlan: "",
      addOns: [],
      finishingUp: [],
    });
  };

  return (
    confirmed && step === 5 ? (
      <SuccessMessage onStartNew={startNew} />
    ) : (
      <StepLayout currentStep={step}>
        {step === 1 && <PersonalInfo formData={formData} updateFormData={updateFormData} onNext={nextStep} />}
        {step === 2 && <SelectPlan formData={formData} updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} />}
        {step === 3 && <AddOns formData={formData} updateFormData={updateFormData} onNext={nextStep} onBack={prevStep} />}
        {step === 4 && !confirmed && (
         <FinishingUp formData={formData} updateFormData={updateFormData} onBack={prevStep} onConfirm={() => {
          setConfirmed(true);
          setStep(5);
        }}
          goToStep={goToStep}
        />
        )}
      </StepLayout>
    )
  );
}
export default App;