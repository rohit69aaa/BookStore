import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";


function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
    <Navbar/>

    
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full px-4 py-10">
        
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div className="flex flex-col">
            <label className="font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border px-4 py-2 rounded-md outline-none"
              {...register("name", { required: true })}
            />
             <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-medium">Email</label>
            <input
              type="email"
              placeholder="Email address"
              className="border px-4 py-2 rounded-md outline-none"
              {...register("email", { required: true })}
            />
             <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message"
              className="border px-4 py-2 rounded-md outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 duration-200"
          >
            Submit
          </button>
        </form>

      </div>
    </div>

    <Footer/>
    </>
  );
}

export default Contact;
