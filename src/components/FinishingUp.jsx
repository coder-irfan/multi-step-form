import React from "react";

function FinishingUp({ formData, onBack, goToStep, onConfirm}) {
  const { plan: selectedPlan, addOns } = formData;

  const planPrices = {
    arcade: 9,
    advanced: 12,
    pro: 15
  };
  const addOnPrices = {
    "Online service": 1,
    "Larger storage": 2,
    "Customizable profile": 2
  };

  const planPrice = planPrices[selectedPlan] || 0;
  const addOnsTotal = addOns.reduce((total, item) => total + (addOnPrices[item] || 0), 0);
  const total = planPrice + addOnsTotal;

  return (
    <>
      <div className="max-w-[30.125rem] w-full lg:w-[28.125rem] lg:max-w-full space-y-4 mt-5 lg:mt-10">
        <div className="bg-neutral-blue50 p-4 lg:px-6 lg:py-5 rounded-lg space-y-3">
          <div className="flex justify-between items-center pb-3">
            <div>
              <h2 className="font-bold text-primary-blue950 first-letter:uppercase">{selectedPlan} (Monthly)</h2>
              <button onClick={() => goToStep(2)} className="text-sm text-neutral-grey500 underline hover:text-primary-purple600">
                Change
              </button>
            </div>
            <p className="font-bold text-primary-blue950">${planPrice}/mo</p>
          </div>
          <hr className="border-neutral-grey200" />

          {addOns.map((addOn) => (
            <div key={addOn} className="flex justify-between items-center pt-2 text-sm text-neutral-grey500">
              <p>{addOn}</p>
              <p className="text-primary-blue950">+${addOnPrices[addOn] || 0}/mo</p>
            </div>
          ))}
        </div>
        </div>

        <div className="flex justify-between pt-6 px-4">
          <p className="text-neutral-grey500 text-sm">Total (per month)</p>
          <p className="font-bold text-lg text-primary-purple600">${total}/mo</p>
        </div>

        <div className="flex flex-row-reverse items-center justify-between mt-12 lg:mt-[5.625rem]">
          <div>
            <input
              type="submit"
              value="Confirm"
              onClick={onConfirm}
              className="px-4 py-2 lg:px-7 lg:py-3 text-sm lg:text-base bg-primary-purple600 text-white rounded-lg cursor-pointer hover:opacity-90"
            />
          </div>
        <div>
          <input
            type="submit"
            value="Go Back"
            onClick={onBack}
            className="text-neutral-grey500 font-bold text-sm cursor-pointer hover:text-primary-blue950"
          />
        </div>
      </div>
    </>
  );
}

export default FinishingUp;
