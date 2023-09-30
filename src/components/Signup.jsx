import React, { useState } from "react";
import { SignUpdata } from "./Api";
import { Link } from "react-router-dom";
function Signup() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setpassword] = useState("");

  const display = (e) => {
    e.preventDefault();
    SignUpdata({
      username,
      email,
      address,
      password,
    });
  };

  return (
    <div>
      <form onSubmit={display}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input type="submit" />
      </form>

      <Link to={"/"}>
        <div>Alread have an account?</div>
      </Link>
    </div>
  );
}

export default Signup;
