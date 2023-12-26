import React from "react";
import { RootRoute } from "../../routes";
import { useAuth } from "../../utils/auth";
import { useLocation, useNavigate } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || RootRoute;

  const handleLogin = (value) => {
    auth.login(value);
    navigate(redirectPath, { replace: true });
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("checking...",values)
    handleLogin(values.email);
  };

  return (
    <Formik
      className="card w-25 mx-auto"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
    >
      {({values,errors,touched,handleChange,handleSubmit}) => (
        <div className="card-body w-25 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-2 d-flex align-items-center">
            <label htmlFor="email" className="card-text">
              Username:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={values.email}
              
            />
            {errors.email && touched.email && errors.email}
          </div>

          <div className="mb-2 d-flex align-items-center">
            <label htmlFor="password">Password: </label>
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && errors.touched && errors.password}
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
      )}
      
    </Formik>
  );
}
