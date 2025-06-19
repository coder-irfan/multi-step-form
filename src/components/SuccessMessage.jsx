import React from "react";

function SuccessMessage( {onStartNew} ) {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center text-center space-y-4 px-4">
      <img src="images/icon-thank-you.svg" alt="" className="w-12 h-12 lg:h-16 lg:w-16" />
      <h1 className="text-2xl font-bold text-primary-blue950">Thank you!</h1>
      <p className="text-neutral-grey500 max-w-md">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at <span className="text-primary-blue950">support@loremgaming.com</span>.
      </p>
      <div className="pt-6">
        <button
          onClick={onStartNew}
          className="px-6 py-2 bg-primary-purple600 text-white rounded-lg hover:opacity-90"
        >
          Start New Confirmation
        </button>
        </div>
    </div>
  );
}

export default SuccessMessage;
