import React, { Component } from "react";
import { css, withStyles } from "../withStyles";
import { withFormik } from "formik";
import Yup from "yup";

import FlexContainer from "../Containers/FlexContainer";
import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import Input from "../Elements/Input";

const LoginForm = ({
  styles,
  handleChange, //Formiks handleChange
  handleSubmit, //Formiks handleSubmit that we use down below, can be used to show loading indicator and to check if email exists etc.
  values, // this is the "state" where all values are stored
  errors, //this is where all the errors are set, to call it use for example errors.email to get the email errors
  touched, //this gets set by handleBlur and is used to not show the error message until the user is finished writing and is moving on to another field
  handleBlur,
  isSubmitting,
  ...props
  // gets set by handleSubmit and returns a bool, can be used to disable buttons while submitting
}) => {
  return (
    <div {...css(styles, styles.loginForm)}>
      <FlexContainer>
        <Heading appearance="primary" size="2">
          Log in as presenter
        </Heading>
        <form onSubmit={handleSubmit}>
          <FlexContainer>
            <FlexContainer align="start" style={{ width: "400px" }}>
              <label style={{ marginBottom: "5px" }} htmlFor="email">
                Email
              </label>
              <Input
                name="email"
                icon={
                  !touched.email && !errors.email
                    ? "far fa-envelope"
                    : touched.email && !errors.email
                      ? "fas fa-check"
                      : "fas fa-times"
                }
                iconPosition="right"
                iconBackground={
                  !touched.email && !errors.email
                    ? "primary"
                    : touched.email && !errors.email
                      ? "success"
                      : touched.email && errors.email
                        ? "danger"
                        : "primary"
                }
                iconFillColor="white"
                type="text"
                placeholder="Email..."
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FlexContainer style={{ minHeight: "20px" }}>
                {errors.email &&
                  touched.email && (
                    <Paragraph size="sub">{errors.email}</Paragraph>
                  )}
              </FlexContainer>
              <label
                htmlFor="password"
                style={{ marginTop: "10px", marginBottom: "5px" }}
              >
                Password
              </label>
              <Input
                name="password"
                icon="fas fa-check"
                iconPosition="right"
                iconBackground={
                  touched.password && errors.password ? "danger" : "primary"
                }
                iconFillColor="white"
                type="password"
                placeholder="Password..."
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FlexContainer style={{ minHeight: "20px" }}>
                {errors.password &&
                  touched.password && (
                    <Paragraph size="sub">{errors.password}</Paragraph>
                  )}
              </FlexContainer>
            </FlexContainer>
            <Button disabled={isSubmitting}>Log In</Button>
          </FlexContainer>
        </form>
        <Paragraph appearance="white">
          Don't have an account? <a href="#">Sign up here!</a>
        </Paragraph>
      </FlexContainer>
    </div>
  );
};

const formikForm = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    //TODO: send a request to db and check if the email and password is correct
    setTimeout(() => {
      if (values.email === "test@test.com") {
        setErrors({ email: "That email is invalid" });
      } else {
        console.log(values);
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(LoginForm);

export default withStyles(({ themes, text, colors }) => {
  return {
    loginForm: {
      ":nth-child(1n) form input": {
        margin: "0px"
      }
    },
    primary: colors.primary,
    danger: colors.danger
  };
})(formikForm);
