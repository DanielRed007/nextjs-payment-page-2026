"use client";

import jsPDF from "jspdf";
import { useState } from "react";

export default function PaymentSuccess() {
  const [isDownloading, setIsDownloading] = useState(false);

  const paymentDetails = {
    amount: "$320.99",
    transactionId: "TXN-5345345",
    paymentMethod: "**** 7172",
    date: "Feb 27, 2026",
    merchant: "Amazing Store",
    receiptEmail: "th7@example.com",
  };

  const handleDownloadReceipt = () => {
    setIsDownloading(true);
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Payment Successful!", 20, 20);

    doc.setFontSize(12);
    doc.text("Your payment has been processed successfully.", 20, 40);
    doc.text("You will receive a confirmation email shortly.", 20, 50);

    doc.text(`Amount: ${paymentDetails.amount}`, 20, 70);
    doc.text(`Transaction ID: ${paymentDetails.transactionId}`, 20, 80);
    doc.text(`Payment Method: ${paymentDetails.paymentMethod}`, 20, 90);
    doc.text(`Date: ${paymentDetails.date}`, 20, 100);
    doc.text(`Merchant: ${paymentDetails.merchant}`, 20, 110);
    doc.text(`Receipt sent to: ${paymentDetails.receiptEmail}`, 20, 120);

    doc.save("receipt.pdf");
    setIsDownloading(false);
  };

  const handleReturn = () => {
    // As per instructions, this button does not navigate to any route.
    // It could be a placeholder or perform another action like closing a modal.
    // For now, it just logs to console. Adjust as needed.
    console.log("Return button clicked - no navigation performed.");
    // Alternatively, if meant to go back: window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 space-y-6">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-green-100 p-4">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Heading and Message */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">
            Payment Successful!
          </h1>
          <p className="text-gray-600">
            Your payment has been processed successfully. You will receive a
            confirmation email shortly.
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-700">
            <span>Amount</span>
            <span className="font-medium">{paymentDetails.amount}</span>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between text-sm text-gray-700">
            <span>Transaction ID</span>
            <span className="font-medium">{paymentDetails.transactionId}</span>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between text-sm text-gray-700">
            <span>Payment Method</span>
            <span className="font-medium">{paymentDetails.paymentMethod}</span>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between text-sm text-gray-700">
            <span>Date</span>
            <span className="font-medium">{paymentDetails.date}</span>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between text-sm text-gray-700">
            <span>Merchant</span>
            <span className="font-medium">{paymentDetails.merchant}</span>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between text-sm text-gray-700">
            <span>Receipt sent to</span>
            <span className="font-medium">{paymentDetails.receiptEmail}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleDownloadReceipt}
            disabled={isDownloading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isDownloading ? "Downloading..." : "Download Receipt"}
          </button>
          <button
            onClick={handleReturn}
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
          >
            Return to Store
          </button>
        </div>

        {/* Support */}
        <div className="text-center text-sm text-gray-500">
          Need help? Contact our support team at{" "}
          <a
            href="mailto:support@techstore.com"
            className="text-blue-600 hover:underline"
          >
            support@techstore.com
          </a>
        </div>
      </div>
    </div>
  );
}
