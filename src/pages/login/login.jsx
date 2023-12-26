import React, { useState } from "react";
import { useAuth } from "../../utils/auth";
import { useLocation, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  // const [user, setUser] = useState({});
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  // const handleChange = (event) => {
  //   setUser((prev)=> ({...prev, ["email"]: event.target.value }));
  //   console.log('checking form input..',user)
  // };

  const handleLogin = (value) => {
    // auth.login(user);
    auth.login(value);
    navigate(redirectPath, { replace: true });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email Address").required("Required"),
      password: Yup.string().required("Reqired"),
    }),
    onSubmit: (values) => {
      handleLogin(values.email);
    },
  });

  return (
    <div className="card w-25 mx-auto">
      <div className="card-body">
        <h5 className="card-title">Login</h5>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-2 d-flex align-items-center">
            <label htmlFor="email" className="card-text">
              Username:
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <span className="text-warning">{formik.errors.email}</span>
            ) : null}
          </div>

          <div className="mb-2 d-flex align-items-center">
            <label htmlFor="password">Password: </label>
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="text-warning">{formik.errors.password}</span>
            ) : null}
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
