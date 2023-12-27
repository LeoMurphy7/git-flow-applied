import React from "react";
import CryptoJS from "crypto-js";

const secretKey = "cryptojs";

export  function DataEncrypt(data) {
  const encryptedData = CryptoJS.AES.encrypt(data, secretKey);
  return encryptedData.toString();
}

export  function DataDecrypt(data) {
  const decryptedData = CryptoJS.AES.decrypt(data,secretKey);
  const originalData = decryptedData.toString(CryptoJS.enc.Utf8);
  return originalData;
}
