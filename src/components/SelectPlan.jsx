import React, {useEffect, useState} from "react";

function SelectPlan( {onNext, onBack, formData, updateFormData} ) {
  const [selectedPlan, setSelectedPlan] = useState(formData.plan || "arcade");
  const [billingType, setBilingType] = useState(formData.billingType || "monthly");

  const toggleBilling = () => {
    setBilingType(prev => (prev) === "monthly" ? "yearly" : "monthly");
  };

  const prices = {
    arcade: billingType === "monthly" ? "$9/mo" : "$90/yr",
    advanced: billingType === "monthly" ? "$12/mo" : "$120/yr",
    pro: billingType === "monthly" ? "$15/mo" : "$150/yr",
  };

  const freeLabel = billingType === "yearly" ? <p className="text-xs pt-1 font-medium text-primary-blue950">2 months free</p> : null;

  useEffect(() => {
    updateFormData({ ...formData, plan: selectedPlan, billingType: billingType});
  }, [selectedPlan, billingType])

  const handleSelect = (plan) => {
    setSelectedPlan(plan)
  }

  const handleNext = () => {
    if(selectedPlan) {
      onNext();
    }
  }

  return (
    <>
      <div className="max-w-[30.125rem] w-full lg:w-[28.125rem] lg:max-w-full my-4 lg:mt-10">
        <div className="wrapper flex flex-col lg:flex-row gap-3 lg:gap-5">
          {["arcade", "advanced", "pro"].map((plan) => (
            <div 
              key={plan} 
              className={`lg:w-[8.3375rem] flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0 p-4 max-w-full rounded-lg border
              border-neutral-grey500 cursor-pointer duration-300 hover:border-primary-purple600
                ${selectedPlan === plan ? "border-primary-purple600 bg-neutral-blue50" : 'border-neutral-grey500'}`}
                onClick={() => handleSelect(plan)}
              >
              <img src={`images/icon-${plan}.svg`} alt={plan} />
              <div className="lg:mt-9">
                <h2 className="text-base font-bold text-primary-blue950 first-letter:uppercase">{plan}</h2>
                <span className="text-[0.8725rem] font-medium text-neutral-grey500">
                  {prices[plan]}
                </span>
                {freeLabel}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <div className="flex items-center justify-center gap-7 w-full bg-neutral-blue50 rounded-md py-1">

            <div className="">
              <p className={`${billingType === "monthly" ? "text-primary-blue950" : "text-neutral-grey500"}`}>Monthly</p>
            </div>

            <div className="relative inline-block w-10 h-11">
              <label>
                <input 
                type="checkbox"
                className="sr-only peer opacity-0 w-0 h-0" 
                checked={billingType === "yearly"}
                onChange={toggleBilling}
                />
                <span className="absolute cursor-pointer bg-primary-blue950 rounded-full top-1/2 -translate-y-1/2 bottom-0 left-0 right-0
                  duration-300 before:absolute before:w-[0.825rem] before:h-[0.8125rem] before:left-1 before:top-[0.25rem] before:bg-white
                  before:rounded-full before:duration-300 before:peer-checked:translate-x-4"></span>
              </label>
            </div>
              
            <div className="">
              <p className={`${billingType === "yearly" ? "text-primary-blue950" : "text-neutral-grey500"}`}>Yearly</p>
            </div>

          </div>
        </div>

        <div className="flex flex-row-reverse items-center justify-between mt-12 lg:mt-[7.725rem]">
          <div>
            <input 
              type="submit" 
              value="Next Step" 
              onClick={handleNext}
              className="px-4 py-2 lg:px-7 lg:py-3 text-sm lg:text-base bg-primary-blue950 text-neutral-blue100 rounded-md lg:rounded-lg duration-300
              cursor-pointer hover:opacity-85"
            />
          </div>

          <div className="">
            <input 
              type="submit"
              value="Go Back"
              className="cursor-pointer text-neutral-grey500 font-bold text-[0.9275rem] duration-300 hover:text-primary-blue950"
              onClick={onBack}
            />
          </div>
        </div>
      </div>
      
    </>
  )
}

export default SelectPlan;