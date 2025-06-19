import React, { useEffect, useState } from "react";

function AddOns({ onNext, onBack, formData, updateFormData }) {
  const [selected, setSelected] = useState(formData.addOns || []);

  useEffect(() => {
    setSelected(formData.addOns || []);
  }, [formData.addOns]);

  const toggleSelection = (option) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleNext = () => {
    updateFormData({ ...formData, addOns: selected });
    onNext();
  };

  const handleBack = () => {
    updateFormData({ ...formData, addOns: selected });
    onBack();
  };

  const options = [
    {
      label: "Online service",
      description: "Access to multiplayer game",
      price: "+$1/mo",
    },
    {
      label: "Larger storage",
      description: "Extra of 1TB of cloud save",
      price: "+$2/mo",
    },
    {
      label: "Customizable profile",
      description: "Custom theme on your profile",
      price: "+$2/mo",
    },
  ];

  return (
    <>
      <div className="max-w-[30.125rem] w-full lg:w-[28.125rem] lg:max-w-full space-y-4 mt-5 lg:mt-10">
        {options.map(({ label, description, price }) => {
          const id = `addon-${label.replace(/\s+/g, "-").toLowerCase()}`;
          return (
            <label
              key={label}
              htmlFor={id}
              className={`flex gap-2 items-center justify-between p-3.5 lg:px-5 lg:py-4 rounded-lg border
                border-neutral-grey500 duration-300 hover:border-primary-purple600
                ${selected.includes(label) ? "border-primary-purple600 bg-neutral-blue50" : "border-neutral-grey500"}`}
            >
              <div className="flex gap-4 lg:gap-6 items-center">
                <input
                  id={id}
                  type="checkbox"
                  checked={selected.includes(label)}
                  onChange={() => toggleSelection(label)}
                  className="w-[1.1rem] h-[1.1rem] accent-primary-purple600 cursor-pointer"
                />
                <div>
                  <h2 className="text-primary-blue950 font-bold text-[0.85rem] lg:text-[0.9275rem]">{label}</h2>
                  <p className="text-[0.75rem] lg:text-sm font-medium text-neutral-grey500">{description}</p>
                </div>
              </div>
              <div>
                <p className="text-primary-purple600 text-[0.8rem] lg:text-sm">{price}</p>
              </div>
            </label>
          );
        })}
      </div>

      <div className="flex flex-row-reverse items-center justify-between mt-12 lg:mt-[5.625rem]">
        <div>
          <input
            type="submit"
            value="Next Step"
            onClick={handleNext}
            className="px-4 py-2 lg:px-7 lg:py-3 text-sm lg:text-base bg-primary-blue950 text-neutral-blue100 rounded-md lg:rounded-lg duration-300 cursor-pointer hover:opacity-85"
          />
        </div>

        <div>
          <input
            type="submit"
            value="Go Back"
            className="cursor-pointer text-neutral-grey500 font-bold text-[0.9275rem] duration-300 hover:text-primary-blue950"
            onClick={handleBack}
          />
        </div>
      </div>
    </>
  );
}

export default AddOns;
