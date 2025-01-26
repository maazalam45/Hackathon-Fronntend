import React from "react";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link to enable navigation

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wallet className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Saylani Microfinance
            </h1>
          </div>
          {/* Navbar with Login and Apply for Loan buttons */}
          <div className="flex gap-4">
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Login
            </Link>
            <Link
              to="/loan"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Apply for Loan
            </Link>
          </div>
        </div>
        <p className="mt-2 text-gray-600">
          Empowering communities through accessible financial solutions
        </p>
      </div>
    </header>
  );
}
