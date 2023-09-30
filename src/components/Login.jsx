import React, { useState } from "react";
import { LoginData } from "./Api";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const display = (e) => {
    e.preventDefault();
    LoginData({ email, password }, dispatch);
  };

  return (
    <div>
      <form onSubmit={display}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input type="submit" />
      </form>

      <Link to={"Signup"}>
        <div>Dont have an account</div>
      </Link>
    </div>
  );
}

export default Login;
