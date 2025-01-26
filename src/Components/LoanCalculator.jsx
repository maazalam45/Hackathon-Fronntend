import React, { useState } from "react";
import { Wallet } from "lucide-react";

const LoanCalculator = () => {
  const categories = [
    {
      name: "Wedding Loans",
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000,
      loanPeriods: [1, 2, 3],
    },
    {
      name: "Home Construction Loans",
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000,
      loanPeriods: [1, 3, 5],
    },
    {
      name: "Business Startup Loans",
      subcategories: [
        "Buy Stall",
        "Advance Rent for Shop",
        "Shop Assets",
        "Shop Machinery",
      ],
      maxLoan: 1000000,
      loanPeriods: [1, 3, 5],
    },
    {
      name: "Education Loans",
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      loanPeriods: [1, 2, 4],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [loanPeriod, setLoanPeriod] = useState(1);
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [estimatedLoan, setEstimatedLoan] = useState(null);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory("");
  };

  const handleCalculate = () => {
    const category = categories.find((cat) => cat.name === selectedCategory);

    if (!category || !selectedSubcategory || initialDeposit < 0) {
      alert("Please fill in all fields correctly!");
      return;
    }

    const maxLoan =
      category.maxLoan === "Based on requirement" ? 1000000 : category.maxLoan; // Example limit
    const loanAmount = maxLoan - initialDeposit;
    const monthlyInstallment = loanAmount / (loanPeriod * 12);

    setEstimatedLoan({
      loanAmount: loanAmount.toFixed(2),
      monthlyInstallment: monthlyInstallment.toFixed(2),
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center ">
      {/* Container for content */}
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl border-t-4 border-white">
        {/* Loan Calculator Form */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Loan Calculator
        </h2>

        <div className="space-y-6">
          {/* Category Selector */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Category
            </label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select a Category --</option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategory Selector */}
          {selectedCategory && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select Subcategory
              </label>
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Select a Subcategory --</option>
                {categories
                  .find((category) => category.name === selectedCategory)
                  .subcategories.map((subcategory, index) => (
                    <option key={index} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
              </select>
            </div>
          )}

          {/* Loan Period Selector */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Loan Period (Years)
            </label>
            <select
              value={loanPeriod}
              onChange={(e) => setLoanPeriod(Number(e.target.value))}
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {selectedCategory
                ? categories
                    .find((category) => category.name === selectedCategory)
                    .loanPeriods.map((period, index) => (
                      <option key={index} value={period}>
                        {period} Year{period > 1 ? "s" : ""}
                      </option>
                    ))
                : null}
            </select>
          </div>

          {/* Initial Deposit Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Initial Deposit (PKR)
            </label>
            <input
              type="number"
              value={initialDeposit}
              onChange={(e) => setInitialDeposit(Number(e.target.value))}
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            className="w-full p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Calculate Loan
          </button>

          {/* Loan Breakdown Display */}
          {estimatedLoan && (
            <div className="mt-8 p-6 bg-green-100 border border-green-200 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-green-600 mb-4">
                Loan Breakdown
              </h3>
              <p>
                <strong>Loan Amount:</strong> PKR {estimatedLoan.loanAmount}
              </p>
              <p>
                <strong>Monthly Installment:</strong> PKR{" "}
                {estimatedLoan.monthlyInstallment}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
