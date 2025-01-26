import React, { useState } from "react";
import { Wallet } from "lucide-react";
import QRCode from "react-qr-code";

const Slip = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    cnic: "",
    email: "",
    name: "",
  });
  const [isLoanSubmitted, setIsLoanSubmitted] = useState(false);
  const [slipDetails, setSlipDetails] = useState(null);

  // Mock token number and appointment details
  const generateSlipDetails = () => {
    return {
      tokenNumber: `TOKEN-${Math.floor(Math.random() * 1000000)}`,
      appointmentDate: "2025-02-01",
      appointmentTime: "10:00 AM",
      officeLocation: "Saylani Microfinance Office, Karachi",
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cnic || !formData.email || !formData.name) {
      alert("Please fill in all fields!");
      return;
    }

    // Generate slip details after submission
    const details = generateSlipDetails();
    setSlipDetails(details);
    setIsLoanSubmitted(true);
    setShowPopup(false);
  };

  const downloadSlip = () => {
    const slipContent = `
      Loan Application Slip
      -----------------------
      Token Number: ${slipDetails.tokenNumber}
      Appointment Date: ${slipDetails.appointmentDate}
      Appointment Time: ${slipDetails.appointmentTime}
      Office Location: ${slipDetails.officeLocation}
    `;

    const blob = new Blob([slipContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${slipDetails.tokenNumber}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          SLIP
        </h2>
        <button
          onClick={() => setShowPopup(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Proceed with Loan Request
        </button>

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Loan Application Form
              </h3>
              <form onSubmit={handleSubmit}>
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
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder="Enter your name"
                  />
                </div>
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

        {/* Slip Details */}
        {isLoanSubmitted && slipDetails && (
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-bold text-green-600 mb-4 text-center">
              Loan Application Submitted Successfully!
            </h3>
            <div className="space-y-2">
              <p>
                <strong>Token Number:</strong> {slipDetails.tokenNumber}
              </p>
              <p>
                <strong>Appointment Date:</strong> {slipDetails.appointmentDate}
              </p>
              <p>
                <strong>Appointment Time:</strong> {slipDetails.appointmentTime}
              </p>
              <p>
                <strong>Office Location:</strong> {slipDetails.officeLocation}
              </p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <QRCode value={slipDetails.tokenNumber} size={120} />
                <button
                  onClick={downloadSlip}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Download Slip
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Slip;
