import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Saylani Microfinance. All rights
          reserved.
        </p>
        {/* Add additional footer content if needed */}
        <div className="text-center mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
