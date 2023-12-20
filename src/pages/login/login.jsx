import React, { useState } from "react";
import { useAuth } from "../../utils/auth";
import { useLocation, useNavigate } from "react-router";

export default function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/" ;

  const handleChange = (event) =>{
    setUser(event.target.value);
  }

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="card w-25 mx-auto" >
      <div className="card-body">
        <h5 className="card-title">Login</h5>
        <div className="mb-2 d-flex align-items-center">
          <label htmlFor="inpt" className="card-text">
            Username: 
          </label>
          <input type="text" id="inpt"  className="form-control" onChange={handleChange}/>
        </div>
        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
