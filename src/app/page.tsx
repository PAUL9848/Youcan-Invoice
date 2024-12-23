'use client';

import React, { useState, useEffect } from 'react';

const invoiceData = [
  {
    item: "Cooper",
    quantity: "1KG",
    price: 100,
    amount: 100.00,
  },
  {
    item: "Silver",
    quantity: "1KG",
    price: 100,
    amount: 100.00,
  },
  {
    item: "Plastic bottles",
    quantity: "1KG",
    price: 100,
    amount: 100.00,
  },
  {
    item: "Plastic bags",
    quantity: "1KG",
    price: 100,
    amount: 100.00,
  },
];

const InvoicePage = () => {
  const [date, setDate] = useState<string | null>(null);

  const subtotal = invoiceData.reduce((acc, item) => acc + item.amount, 0);
  const discountPercentage = 5;
  const discountAmount = (subtotal * discountPercentage) / 100;
  const grandTotal = subtotal - discountAmount;

  const invoiceNumber = 1;

  useEffect(() => {
    setDate(new Date().toLocaleDateString('en-US'));
  }, []);

  if (!date) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-2">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-lg p-4">
        <div className="flex flex-col items-end mb-4">
          <div className="w-16 mb-2">
            <img src="/images/logo2.png" alt="Logo" className="w-full" />
          </div>
          <div className="text-right text-xs">
            <h1 className="font-semibold text-sm">INVOICE</h1>
            <p className="text-xs text-gray-600"><span className="font-bold">Date:</span> {date}</p>
            <p className="text-xs text-gray-600"><span className="font-bold">Invoice No:</span> {invoiceNumber}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        <div className="mb-4 text-gray-600 pl-2">
          <p className="font-bold text-[10px]">CUSTOMER DETAILS</p>
          <p className="text-[11px] m-0">Paul Kenneth</p>
          <p className="text-[11px] m-0">Hsr Layout, Sector 4</p>
          <p className="text-[11px] m-0">Bengaluru, 530013</p>
          <p className="text-[11px] m-0">Karnataka</p>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full table-auto pl-2">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left text-xs font-semibold py-2 px-2">Item</th>
                <th className="text-left text-xs font-semibold py-2 px-2">Qty</th>
                <th className="text-left text-xs font-semibold py-2 px-2">Price Per kg</th>
                <th className="text-right text-xs font-semibold py-2 px-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((item, index) => (
                <tr key={index} className="bg-gray-100 bg-opacity-20">
                  <td className="py-2 px-2 text-xs">{item.item}</td>
                  <td className="py-2 px-2 text-xs">{item.quantity}</td>
                  <td className="py-2 px-2 text-xs">${item.price}</td>
                  <td className="py-2 px-2 text-xs text-right">${item.amount.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="border-t border-gray-300 bg-gray-100 bg-opacity-20">
                <td colSpan={3} className="text-right py-2 px-2 text-xs font-semibold">Discount ({discountPercentage}%)</td>
                <td className="py-2 px-2 text-xs text-right">${discountAmount.toFixed(2)}</td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-100 bg-opacity-20">
                <td colSpan={3} className="text-right py-2 px-2 text-xs font-semibold">Grand Total:</td>
                <td className="py-2 px-2 text-xs text-right font-semibold">${grandTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <p className="text-xs">For any queries, contact us at:</p>
          <p className="font-semibold text-xs">youcan@support.co</p>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
