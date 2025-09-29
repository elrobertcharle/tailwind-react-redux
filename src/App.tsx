import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./store/store";
import { increment, decrement, incrementByAmount } from "./store/counterSlice";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

import { useState } from "react";
import "./App.css";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const [amount, setAmount] = useState(0);

  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-200 flex space-x-4">
        <Link to="/" className="text-blue-600">
          Login
        </Link>
        <Link to="/profile" className="text-blue-600">
          Profile
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Redux Counter</h1>
        <p className="text-2xl mb-4">Count: {count}</p>
        <div className="flex space-x-2">
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-amber-600  text-white rounded hover:bg-blue-600"
          >
            +
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>
        </div>

        <div className="mt-6 flex space-x-2">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="border rounded px-2"
          />
          <button
            onClick={() => dispatch(incrementByAmount(amount))}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Amount
          </button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
