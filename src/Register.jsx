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
    <div className="max-w-md mx-auto p-6 mt-20 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
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
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
          </div>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Username (optional)</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block mb-1 font-semibold">Phone Number (optional)</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
        </div>
        <div>
          <label className="block mb-1 font-semibold">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
        </div>
        <div>
          <label className="block mb-1 font-semibold">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
            <option value="preferNotToSay">Prefer not to say</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Country / Region</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Referral Code (optional)</label>
          <input
            type="text"
            name="referralCode"
            value={formData.referralCode}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">User Role</label>
          <select
            name="userRole"
            value={formData.userRole}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="consultant">Consultant</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
          />
          <label>
            I agree to the <a href="/terms" className="text-blue-600 underline">Terms and Conditions</a>
          </label>
        </div>
        {errors.agreeTerms && <p className="text-red-600 text-sm">{errors.agreeTerms}</p>}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agreePrivacy"
            checked={formData.agreePrivacy}
            onChange={handleChange}
          />
          <label>
            I agree to the <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>
          </label>
        </div>
        {errors.agreePrivacy && <p className="text-red-600 text-sm">{errors.agreePrivacy}</p>}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            checked={captchaChecked}
            onChange={() => setCaptchaChecked(!captchaChecked)}
          />
          <label>Please verify you are not a robot (CAPTCHA placeholder)</label>
        </div>
        {errors.captcha && <p className="text-red-600 text-sm">{errors.captcha}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4"
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
