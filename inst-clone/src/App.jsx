import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);

  return (
    <div>

      {page === "signup" && (
        <Signup setPage={setPage} setUser={setUser} />
      )}

      {page === "login" && (
        <Login setPage={setPage} user={user} />
      )}

      {page === "home" && (
        <Home setPage={setPage} />
      )}

    </div>
  );
}

export default App;