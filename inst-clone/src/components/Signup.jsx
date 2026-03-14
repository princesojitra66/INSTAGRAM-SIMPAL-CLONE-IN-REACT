import { useState } from "react";

function Signup({ setPage, setUser }) {

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("Fill all fields");
      return;
    }

    setUser(data);
    setPage("login");
  };

  return (

    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)"
      }}
    >

      <div className="card shadow-lg p-4" style={{ width: "350px", borderRadius:"15px" }}>

        <h2 className="text-center mb-4 fw-bold">
          Instagram
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary w-100 mb-3">
            Create Account
          </button>

        </form>

        <hr />

        <p className="text-center mb-0">
          Already have an account?
          <span
            style={{cursor:"pointer"}}
            className="text-primary ms-1"
            onClick={() => setPage("login")}
          >
            Login
          </span>
        </p>

      </div>

    </div>

  );
}

export default Signup;