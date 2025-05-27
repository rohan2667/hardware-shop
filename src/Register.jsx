import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    country: '',
    referralCode: '',
    userRole: '',
    agreeTerms: false,
    agreePrivacy: false,
  });

  const [errors, setErrors] = useState({});
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const validatePassword = (password) => {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    return (
      password.length >= minLength &&
      hasNumber.test(password) &&
      hasSpecialChar.test(password)
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (!validatePassword(formData.password)) newErrors.password = 'Password must be at least 8 characters and include a number and special character';
    if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the Terms and Conditions';
    if (!formData.agreePrivacy) newErrors.agreePrivacy = 'You must agree to the Privacy Policy';
    if (!captchaChecked) newErrors.captcha = 'Please verify you are not a robot';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit form or API call here
      alert('Registration successful!');
      navigate('/signin');
    }
  };

  return (
    <div className="w-full p-10 mt-6 bg-white rounded shadow max-w-full">
      <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full border border-gray-300 rounded-3xl p-10">
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex-1">
            <label className="block mb-1 font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded-full px-4 py-2 w-full"
            />
            {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded-full px-4 py-2 w-full"
            />
            {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
          </div>
        </div>
      
        <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className='flex-1'>
          <label className="block mb-1 font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-full px-4 py-2 w-full"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>
        
        <div className='flex-1'>
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-full px-4 py-2 w-full"
          />
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
        </div>
      </div>
        {errors.agreePrivacy && <p className="text-red-600 text-sm">{errors.agreePrivacy}</p>}
       
        <button
          type="submit"
          className="bg-blue-900 text-white py-2  hover:bg-blue-600 mt-4 w-[20rem] rounded-full"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{' '}
        <Link to="/signin" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;


