import React from "react";
import { useForm } from "react-hook-form";

function PersonalInfo( {onNext, formData, updateFormData} ) {
  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      name: formData.name,
      email: formData.email,
      tel: formData.tel,
    },
  });

  const onSubmit = data => {
    updateFormData(data);
    onNext();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5 lg:mt-9 lg:mb-0 flex flex-col">
        <div className="wrapper flex flex-col gap-2 lg:gap-6">
          <div className="form-input">
            <div className="mb-1.5 flex justify-between items-center">
              <label htmlFor="name" className="text-sm text-primary-blue950 font-medium">Name</label>
              {errors.name && (
                <p className="error text-sm text-primary-red500 font-bold">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input 
                type="text"
                name="name" 
                id="name"
                placeholder="e.g. Stephen King"
                autoFocus
                className={`input px-3 py-2.5 border rounded-sm lg:rounded-lg w-full cursor-pointer
                focus:border-primary-purple600 focus:outline-none
                  ${errors.name ? "border-primary-red500" : 'border-neutral-grey500'}`}
                {...register("name", {required: "This field is required"})}
              />
            </div>
          </div>

          <div className="form-input">
            <div className="mb-1.5 flex justify-between items-center">
              <label htmlFor="email" className="text-sm text-primary-blue950 font-medium">Email Address</label>
              {errors.email && (
                <p className="error text-sm text-primary-red500 font-bold">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input 
                type="email"
                name="email" 
                id="email"
                placeholder="e.g. stephenking@lorem.com"
                className={`input px-3 py-2.5 border rounded-sm lg:rounded-lg w-full cursor-pointer
                  focus:border-primary-purple600 focus:outline-none
                  ${errors.email ? "border-primary-red500" : 'border-neutral-grey500'}`}
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  }
                })}
              />
            </div>
          </div>

          <div className="form-input">
            <div className="mb-1.5 flex justify-between items-center">
              <label htmlFor="tel" className="text-sm text-primary-blue950 font-medium">Phone Number</label>
              {errors.tel && (
                <p className="error text-sm text-primary-red500 font-bold">{errors.tel.message}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="e.g. +1 234 567 890"
                className={`input px-3 py-3 border rounded-sm lg:rounded-lg w-full cursor-pointer
                  focus:border-primary-purple600 focus:outline-none
                  ${errors.tel ? "border-primary-red500" : 'border-neutral-grey500'}`}
                {...register("tel", {
                  required: "This field is required",
                  pattern: {
                    value: /^\+?[0-9\s\-]{7,15}$/,
                    message: "Please enter a valid phone number",
                  }
                })}
              />
            </div>
          </div>
        </div>

        <div className="self-end mt-12 lg:mt-[5.5rem]">
          <div>
            <input 
              type="submit" 
              value="Next Step" 
              className="px-4 py-2 lg:px-7 lg:py-3 text-sm lg:text-base lg:-mr-1.5 bg-primary-blue950 text-neutral-blue100 rounded-md lg:rounded-lg duration-300
              cursor-pointer hover:opacity-85"
            />
          </div>
        </div>
      
      </form>
    </>
  )
}

export default PersonalInfo;