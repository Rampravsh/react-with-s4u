import { useState } from "react";

function App() {
  const [paymentMode, setPaymentMode] = useState("");
  console.log(paymentMode);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xs">
        <label
          htmlFor="payment-method"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Select Payment Method:
        </label>
        <div className="relative">
          <select
            id="payment-method"
            name="payment-method"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-sm"
          >
            <option value="">---Select below---</option>
            <option value="upi">UPI</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
