import React from "react";
import { useAuth } from "../../utils/auth";
import { useNavigate } from "react-router";
import { LoginRoute } from "../../routes";

const Profile = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    navigate(LoginRoute);
  };

  return (
    <div className="mx-auto w-25 h-25">
      <h1>Wellcome {auth.user}</h1>

      <button className="btn btn-warning" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
