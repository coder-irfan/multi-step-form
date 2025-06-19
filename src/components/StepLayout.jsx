import React from "react";

function StepLayout( {children, currentStep} ) {

  const steps = [
    { id: "1", title: "Your info", label: "Step 1" },
    { id: "2", title: "Select plan", label: "Step 2" },
    { id: "3", title: "Add-ons", label: "Step 3" },
    { id: "4", title: "Summary", label: "Step 4" }
  ];

  const headers = [
    { id: "1", title: "Personal info", text: "Please provide your name, email address, and phone number." },
    { id: "2", title: "Select your plan", text: "You have the option of monthly or yearly billing." },
    { id: "3", title: "Pick add-ons", text: "Add-ons help enhance your gaming experience." },
    { id: "4", title: "Finishing up", text: "Double-check everything looks OK before confirming." }
  ];
                       // to show only ONE
  const currentHeader = headers.find(header => +header.id === currentStep)
    
  return (
    <>
    <div className="lg:flex lg:items-center lg:justify-center lg:h-screen">
      <div className="wrapper relative lg:bg-neutral-white lg:p-4 rounded-2xl flex flex-col justify-around xl:justify-normal lg:flex-row lg:gap-16 xl:gap-24 lg:w-full
        lg:max-w-[58.75rem]">

          <div className="image relative">
            <img src="/images/bg-sidebar-mobile.svg" alt="bg-sidebar" className="w-screen h-[10.75rem] object-cover md:h-[13.125rem] lg:hidden" />
            <img src="/images/bg-sidebar-desktop.svg" alt="bg-sidebar" className="hidden lg:flex flex-row lg:flex-col max-w-full w-[17.125rem] h-full object-cover rounded-xl" />
            <div className="buttons flex flex-row lg:flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[1.9275rem] absolute top-8 left-1/2 -translate-x-1/2 lg:translate-x-0
              lg:top-[2.4625rem] lg:left-8">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col gap-4 lg:flex-row items-end">
                  <div className={`flex justify-center items-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[2.125rem] lg:h-[2.125rem]
                  text-primary-blue300 border-2 border-neutral-grey500 rounded-full
                    ${+step.id === currentStep ? "bg-primary-blue300 border-none text-primary-blue950" : ""}`}
                  >
                    <span className="text-sm font-bold">{step.id}</span>
                  </div>
                  <div className="hidden lg:flex flex-row lg:flex-col">
                    <span className="uppercase font-normal text-neutral-grey500 text-[0.75rem]">{step.label}</span>
                    <p className="text-sm leading-4 tracking-wider uppercase font-medium text-neutral-blue100">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute px-4 lg:p-0 top-[6.125rem] right-1/2 w-full max-w-[30.125rem] lg:w-auto translate-x-1/2 lg:top-0 lg:relative lg:right-0
            lg:translate-x-0 flex flex-col justify-around items-center lg:pt-8">
            <div className="bg-white py-7 px-6 lg:py-0 lg:px-0 rounded-lg lg:rounded-none lg:bg-transparent">

              {currentHeader !== 5 && (
                <div className="">
                  <h1 className="text-2xl lg:text-[2rem] font-bold text-primary-blue950 mb-3">{currentHeader.title}</h1>
                  <p className="text-base text-neutral-grey500">{currentHeader.text}</p>
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StepLayout;