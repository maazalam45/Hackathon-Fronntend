import React, { useState } from "react";
import { Wallet } from "lucide-react";

const LoanApplication = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    cnic: "",
    email: "",
    fullName: "",
    loanAmount: "",
    category: "",
    subCategory: "",
  });
  const [isLoanSubmitted, setIsLoanSubmitted] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  // Loan categories and subcategories
  const categories = [
    {
      name: "Wedding Loans",
      subCategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: "PKR 5 Lakh",
      loanPeriod: "3 years",
    },
    {
      name: "Home Construction Loans",
      subCategories: ["Structure", "Finishing", "Loan"],
      maxLoan: "PKR 10 Lakh",
      loanPeriod: "5 years",
    },
    {
      name: "Business Startup Loans",
      subCategories: [
        "Buy Stall",
        "Advance Rent for Shop",
        "Shop Assets",
        "Shop Machinery",
      ],
      maxLoan: "PKR 10 Lakh",
      loanPeriod: "5 years",
    },
    {
      name: "Education Loans",
      subCategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      loanPeriod: "4 years",
    },
  ];

  // Handle category change to update subcategories
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData({
      ...formData,
      category: selectedCategory,
      subCategory: "", // Reset subcategory when category changes
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.cnic ||
      !formData.email ||
      !formData.fullName ||
      !formData.loanAmount ||
      !formData.category ||
      !formData.subCategory
    ) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const response = await fetch(`${API_URL}loan/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      const data = await response.json();

      if (response.ok) {
        // Successful submission
        setIsLoanSubmitted(true);
        setShowPopup(false);
      } else {
        // Error from the API
        alert(`Error: ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      // Handle any network errors
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Main Content */}
      <div className="max-w-7xl w-full px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Loan Application
        </h2>
        <div className="flex justify-center">
          <button
            onClick={() => setShowPopup(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Proceed with Loan Request
          </button>
        </div>

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Loan Application Form
              </h3>
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* CNIC */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    CNIC
                  </label>
                  <input
                    type="text"
                    name="cnic"
                    value={formData.cnic}
                    onChange={(e) =>
                      setFormData({ ...formData, cnic: e.target.value })
                    }
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder="Enter your CNIC"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Loan Amount */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Loan Amount
                  </label>
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={(e) =>
                      setFormData({ ...formData, loanAmount: e.target.value })
                    }
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder="Enter loan amount"
                  />
                </div>

                {/* Category */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Loan Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleCategoryChange}
                    className="w-full border rounded-lg px-4 py-2"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subcategory */}
                {formData.category && (
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      Loan Subcategory
                    </label>
                    <select
                      name="subCategory"
                      value={formData.subCategory}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subCategory: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg px-4 py-2"
                    >
                      <option value="">Select Subcategory</option>
                      {categories
                        .find((category) => category.name === formData.category)
                        .subCategories.map((subCategory, index) => (
                          <option key={index} value={subCategory}>
                            {subCategory}
                          </option>
                        ))}
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Submission Confirmation */}
        {isLoanSubmitted && (
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-bold text-green-600 mb-4">
              Loan Application Submitted Successfully!
            </h3>
            <p>
              Your loan application has been received. We will contact you soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanApplication;
