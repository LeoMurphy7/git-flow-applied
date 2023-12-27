import React from "react";
import { useAuth } from "../../utils/auth";
import { useNavigate } from "react-router";
import { LoginRoute } from "../../routes";
import CryptoJS from 'crypto-js';
import {DataEncrypt , DataDecrypt} from "../../utils/dataHash";

const Profile = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    navigate(LoginRoute);
  };

  const testData = [
    {id:1 , name:'johndoe' , age:12},
    {id:2 , name:'lisa', age:15}
  ]
  const testText = 'Hello World';

  const encrypted = DataEncrypt(testText);
  console.log("checking encrypted data...",encrypted);

  const decrypted = DataDecrypt(encrypted);
  console.log("checking decrypted data...",decrypted)

  return (
    <div className="mx-auto w-25 h-25">
      <h1>Welcome {auth.user}</h1>

      <button className="btn btn-warning" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
