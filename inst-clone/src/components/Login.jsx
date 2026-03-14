import { useState } from "react";

function Login({ setPage, user }) {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If user has not signed up
    if (!user) {
      alert("First signup, then login");
      setPage("signup");
      return;
    }

    // Check login credentials
    if (
      loginData.email === user.email &&
      loginData.password === user.password
    ) {
      setPage("home");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (

    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background:
          "linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)"
      }}
    >

      <div
        className="card shadow-lg p-4"
        style={{ width: "350px", borderRadius: "15px" }}
      >

        <h2 className="text-center fw-bold mb-4">
          Instagram
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Enter your password"
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100 mb-3">
            Login
          </button>

        </form>

        <hr />

        <p className="text-center mb-0">
          Don’t have an account?
          <span
            className="text-primary ms-1"
            style={{ cursor: "pointer" }}
            onClick={() => setPage("signup")}
          >
            Signup
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;