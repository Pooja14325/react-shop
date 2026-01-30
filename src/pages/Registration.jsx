import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const user = { mobile, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Register successful");
    navigate("/login");
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light m-3">
      <div className="card shadow p-4" style={{ width: "380px" }}>
        <h2 className="text-center mb-4 text-primary">Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
