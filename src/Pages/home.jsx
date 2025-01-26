import React from "react";
import LoanCalculator from "../Components/loanCalculator";
import LoanApplication from "../Components/LoanApplication";
import Slip from "../Components/Slip";

const Home = () => {
  const categories = [
    {
      name: "Wedding Loans",
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: "PKR 5 Lakh",
      loanPeriod: "3 years",
    },
    {
      name: "Home Construction Loans",
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: "PKR 10 Lakh",
      loanPeriod: "5 years",
    },
    {
      name: "Business Startup Loans",
      subcategories: [
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
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      loanPeriod: "4 years",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Loan Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {category.name}
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Maximum Loan:</strong> {category.maxLoan}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Loan Period:</strong> {category.loanPeriod}
              </p>
              <h4 className="text-gray-800 font-semibold">Subcategories:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex}>{subcategory}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <LoanCalculator />
      <LoanApplication />
      <Slip />
    </div>
  );
};

export default Home;
