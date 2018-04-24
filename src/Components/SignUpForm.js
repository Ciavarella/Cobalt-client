import React, { Component } from "react";
import { css, withStyles } from "../withStyles";
import { withFormik } from "formik";
import Yup from "yup";

import FlexContainer from "../Containers/FlexContainer";
import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import InputWithIcon from "../Elements/InputWithIcon";

const SignUpForm = ({
  styles,
  handleSubmit,
  handleChange,
  values,
  errors,
  touched,
  handleBlur,
  isSubmitting,
  ...props
}) => {
  return (
    <div {...css(styles, styles.signUpForm)}>
      <FlexContainer>
        <Heading size="2" appearance="primary">
          Sign up here
        </Heading>
        <form onSubmit={handleSubmit}>
          <FlexContainer>
            <FlexContainer align="start" style={{ width: "400px" }}>
              <label htmlFor="name">Name</label>
              <InputWithIcon
                name="name"
                icon="fas fa-check"
                iconPosition="right"
                iconBackground={
                  touched.name && errors.name ? "danger" : "primary"
                }
                iconFillColor="white"
                type="text"
                placeholder="Name..."
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FlexContainer style={{ minHeight: "20px" }}>
                {errors.name &&
                  touched.name && (
                    <Paragraph size="sub">{errors.name}</Paragraph>
                  )}
              </FlexContainer>
              <label htmlFor="email">Email</label>
              <InputWithIcon
                name="email"
                icon="fas fa-check"
                iconPosition="right"
                iconBackground={
                  touched.email && errors.email ? "danger" : "primary"
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
              <label htmlFor="password">Password</label>
              <InputWithIcon
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
            <Button disabled={isSubmitting}>Sign Up</Button>
          </FlexContainer>
        </form>
        <Paragraph appearance="white">
          Already have an account? <a href="#">Log in here!</a>
        </Paragraph>
      </FlexContainer>
    </div>
  );
};

const formikForm = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .trim("Your name should'nt include leading or trailing whitespace")
      .strict(false)
      .min(2, "Must be longer than 2 characters")
      .max(40, "Seems you got a pretty long name there")
      .required("Name is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .trim("Your password should'nt include leading or trailing whitespace")
      .strict(false)
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    //TODO: send a request to db and check if the email already exists
    setTimeout(() => {
      if (values.email === "test@test.com") {
        setErrors({ email: "That email is already registered" });
      } else {
        console.log(values);
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(SignUpForm);

export default withStyles(({ themes, text, colors }) => {
  return {
    signUpForm: {
      ":nth-child(1n) form input": {
        margin: "0"
      },
      ":nth-child(1n) label": {
        marginTop: "20px",
        marginBottom: "5px"
      }
    },
    primary: colors.primary,
    danger: colors.danger,
    success: colors.success
  };
})(formikForm);
