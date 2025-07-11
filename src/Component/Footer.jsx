// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">Velvet-Spicy</h3>
          <p>Your one-stop solution for tasty meals delivered fast and fresh!</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/login" className="hover:text-yellow-400">Login</Link></li>
            <li><Link to="/signup" className="hover:text-yellow-400">Sign Up</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
            
            <li><Link to="/privacy" className="hover:text-yellow-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-yellow-400">Terms & Conditions</Link></li>
          </ul>
        </div>

      </div>
       <div>
      <h3 className="text-xl font-semibold mb-2">Contact</h3>
      <p className="text-sm text-gray-300">Email: support@Velvet-Spicy.com</p>
      <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
      <p className="text-sm text-gray-300">Location: New Delhi, India</p>
    </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} Velvet-Spicy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
