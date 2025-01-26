import React, { useState } from "react";

const Admin = () => {
  const [cityFilter, setCityFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");

  const applications = [
    {
      tokenNumber: "A123",
      name: "John Doe",
      city: "New York",
      country: "USA",
      loanCategory: "Personal",
      loanSubCategory: "Home Improvement",
      loanAmount: 10000,
      guarantor: {
        name: "Jane Doe",
        relation: "Sister",
        contact: "123-456-7890",
      },
      userProvidedInfo: {
        employmentStatus: "Employed",
        monthlyIncome: 5000,
      },
    },
    {
      tokenNumber: "B456",
      name: "Alice Smith",
      city: "London",
      country: "UK",
      loanCategory: "Business",
      loanSubCategory: "Startup",
      loanAmount: 25000,
      guarantor: {
        name: "Bob Smith",
        relation: "Friend",
        contact: "987-654-3210",
      },
      userProvidedInfo: {
        employmentStatus: "Self-Employed",
        monthlyIncome: 7000,
      },
    },
  ];

  const filterApplications = () => {
    return applications.filter((app) => {
      return (
        (cityFilter ? app.city === cityFilter : true) &&
        (countryFilter ? app.country === countryFilter : true)
      );
    });
  };

  const viewLoanDetails = (tokenNumber) => {
    const app = applications.find((app) => app.tokenNumber === tokenNumber);
    return app ? (
      <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Loan Details
        </h3>
        <p className="text-gray-600">
          <strong>Category:</strong> {app.loanCategory}
        </p>
        <p className="text-gray-600">
          <strong>Subcategory:</strong> {app.loanSubCategory}
        </p>
        <p className="text-gray-600">
          <strong>Amount:</strong> ${app.loanAmount}
        </p>
        <div className="bg-gray-50 p-4 rounded-md mt-4">
          <h4 className="font-semibold text-gray-700">Guarantor Details:</h4>
          <p className="text-gray-600">
            <strong>Name:</strong> {app.guarantor.name}
          </p>
          <p className="text-gray-600">
            <strong>Relation:</strong> {app.guarantor.relation}
          </p>
          <p className="text-gray-600">
            <strong>Contact:</strong> {app.guarantor.contact}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md mt-4">
          <h4 className="font-semibold text-gray-700">
            User Provided Information:
          </h4>
          <p className="text-gray-600">
            <strong>Employment Status:</strong>{" "}
            {app.userProvidedInfo.employmentStatus}
          </p>
          <p className="text-gray-600">
            <strong>Monthly Income:</strong> $
            {app.userProvidedInfo.monthlyIncome}
          </p>
        </div>
      </div>
    ) : null;
  };

  const filteredApplications = filterApplications();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Loan Applications
        </h1>

        <div className="flex mb-6 space-x-4 justify-center">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Filter by City
            </label>
            <select
              className="p-3 border border-gray-300 rounded-md w-full"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            >
              <option value="">All Cities</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Filter by Country
            </label>
            <select
              className="p-3 border border-gray-300 rounded-md w-full"
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
            >
              <option value="">All Countries</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>
        </div>

        <button
          onClick={filterApplications}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Apply Filters
        </button>

        <div className="mt-8">
          {filteredApplications.length === 0 ? (
            <p className="text-center text-gray-500">No applications found.</p>
          ) : (
            filteredApplications.map((app) => (
              <div
                key={app.tokenNumber}
                className="bg-gray-100 p-6 rounded-lg shadow-md mb-6"
              >
                <h2 className="text-2xl font-semibold text-gray-800">
                  {app.name} ({app.tokenNumber})
                </h2>
                <p className="text-gray-600">
                  <strong>City:</strong> {app.city}
                </p>
                <p className="text-gray-600">
                  <strong>Country:</strong> {app.country}
                </p>
                <button
                  onClick={() => alert(viewLoanDetails(app.tokenNumber))}
                  className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                >
                  View Loan Details
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
