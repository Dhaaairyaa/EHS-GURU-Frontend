import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    message: '',
    resume:'',
    jobId:'',
    linkedin:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/v1/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        // Display each error as a toast
        data.errors.forEach(error => toast.error(error));
      } else {
        toast.success('Application submitted successfully!');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="max-w-[700px] rounded-lg p-10 bg-[#ECE8E0] shadow-lg">
      <ToastContainer />
      <style jsx>{`
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 30px white inset !important;
          -webkit-text-fill-color: #000000 !important;
        }
      `}</style>
      <form onSubmit={handleSubmit}>
        <div className="flex-flex-col"> 
          <div className="flex space-x-10">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">
                <span>Full Name</span>
                <span className="text-[#FF0000] ml-1">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-[200px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" 
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
                <label className="flex items-center">
                  <span>Phone Number</span>  
                  <span className="text-[#FF0000] ml-1">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-[200px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" 
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
            </div>
          </div>

          <div className="flex flex-col space-y-2 pt-10">
            <label htmlFor="email">
              <span>Email</span>
              <span className="text-[#FF0000] ml-1">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-[440px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" 
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />  
          </div>

          <div className="flex flex-col space-y-2 pt-10">
            <label htmlFor="jobId">
              Job Id (optional)
            </label>
            <input
              className="shadow appearance-none border rounded w-[440px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" 
              id="jobId"
              name="jobId"
              type="number"
              placeholder="Refer to current openings"
              value={formData.jobId}
              onChange={handleChange}
            />  
          </div>

          <div className="flex flex-col space-y-2 pt-10">
            <label htmlFor="linkedin">
              LinkedIn URL
            </label>
            <input
              className="shadow appearance-none border rounded w-[440px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="linkedin" 
              name="linkedin"  
              type="url" 
              placeholder="Your LinkedIn URL"  
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col space-y-2 pt-10">
            <label htmlFor="resume">
              <span>Resume URL</span>
              <span className="text-[#FF0000] ml-1">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-[440px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="resume"  
              name="resume"  
              type="url"  
              placeholder="Drive link should be made public" 
              value={formData.resume} 
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col space-y-2 pt-10">
            <label htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-[440px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Cover Letter"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
            />
          </div>

          <div className="flex items-center justify-between pt-10">
            <button
              className="bg-[#175b34] hover:bg-[#093b1e] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
