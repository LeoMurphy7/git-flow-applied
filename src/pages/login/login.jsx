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
    handleLogin(values.email);
  };

  return (
    <Formik
      className="card w-25 mx-auto"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="card-body w-25 mx-auto">
        <h5 className="card-title">Login</h5>
        <Form>
          <div className="mb-2 d-flex align-items-center">
            <label htmlFor="email" className="card-text">
              Username:
            </label>
            <Field
              type="text"
              id="email"
              name="email"
              className="form-control"
            />
            <ErrorMessage name="email" />
          </div>

          <div className="mb-2 d-flex align-items-center">
            <label htmlFor="password">Password: </label>
            <Field
              className="form-control"
              type="password"
              id="password"
              name="password"
            />
            <ErrorMessage name="password" />
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
    </Formik>
  );
}
