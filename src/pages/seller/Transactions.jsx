import React, { useState, useEffect } from "react";

const transactionsData = [
  { id: 1, amount: 250, date: "2024-03-01", status: "Completed", type: "Credit" },
  { id: 2, amount: 120, date: "2024-03-02", status: "Pending", type: "Debit" },
  { id: 3, amount: 320, date: "2024-03-03", status: "Completed", type: "Credit" },
  { id: 4, amount: 150, date: "2024-03-04", status: "Failed", type: "Debit" },
  { id: 5, amount: 500, date: "2024-03-05", status: "Completed", type: "Credit" },
  { id: 6, amount: 90, date: "2024-03-06", status: "Pending", type: "Debit" },
  { id: 7, amount: 700, date: "2024-03-07", status: "Completed", type: "Credit" },
  { id: 8, amount: 230, date: "2024-03-08", status: "Failed", type: "Debit" },
  { id: 9, amount: 110, date: "2024-03-09", status: "Completed", type: "Credit" },
  { id: 10, amount: 400, date: "2024-03-10", status: "Pending", type: "Debit" },
  { id: 11, amount: 50, date: "2024-03-11", status: "Completed", type: "Credit" },
  { id: 12, amount: 330, date: "2024-03-12", status: "Failed", type: "Debit" },
  { id: 13, amount: 250, date: "2024-03-01", status: "Completed", type: "Credit" },
  { id: 14, amount: 120, date: "2024-03-02", status: "Pending", type: "Debit" },
  { id: 15, amount: 320, date: "2024-03-03", status: "Completed", type: "Credit" },
  { id: 16, amount: 150, date: "2024-03-04", status: "Failed", type: "Debit" },
  { id: 17, amount: 500, date: "2024-03-05", status: "Completed", type: "Credit" },
  { id: 18, amount: 90, date: "2024-03-06", status: "Pending", type: "Debit" },
  { id: 19, amount: 700, date: "2024-03-07", status: "Completed", type: "Credit" },
  { id: 20, amount: 230, date: "2024-03-08", status: "Failed", type: "Debit" },
  { id: 21, amount: 110, date: "2024-03-09", status: "Completed", type: "Credit" },
  { id: 22, amount: 400, date: "2024-03-10", status: "Pending", type: "Debit" },
  { id: 23, amount: 50, date: "2024-03-11", status: "Completed", type: "Credit" },
  { id: 24, amount: 330, date: "2024-03-12", status: "Failed", type: "Debit" },
];

export default function Transaction() {
  const [transactions, setTransactions] = useState(transactionsData);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 6;

  // Get current transactions for pagination
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-white">Transaction History</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`p-4 shadow-lg rounded-lg ${
              transaction.type === "Credit" ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <h3 className="text-lg font-bold">Transaction #{transaction.id}</h3>
            <p className="text-gray-700">Amount: ${transaction.amount}</p>
            <p className="text-gray-700">Date: {transaction.date}</p>
            <p
              className={`font-semibold ${
                transaction.status === "Completed"
                  ? "text-green-600"
                  : transaction.status === "Pending"
                  ? "text-orange-600"
                  : transaction.status == "Failed" ? 
                  "text-red-600" : "text-white"
              }`}
            >
              Status: {transaction.status}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(transactions.length / transactionsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
