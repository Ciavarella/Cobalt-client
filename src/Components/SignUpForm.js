import React from "react";
import { css, withStyles } from "../withStyles";
import { Link } from "react-router-dom";

import { withFormik } from "formik";
import Yup from "yup";

import FlexContainer from "../Containers/FlexContainer";
import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import Input from "../Elements/Input";

let SignUpForm = ({
  styles,
  handleSubmit,
  handleChange,
  values,
  errors,
  touched,
  handleBlur,
  isSubmitting,
  signupRequest,
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
              <Input
                name="name"
                appearance={
                  !touched.name && !errors.name
                    ? "primary"
                    : touched.name && !errors.name
                      ? "success"
                      : touched.name && errors.name
                        ? "danger"
                        : "primary"
                }
                icon={
                  !touched.name && !errors.name
                    ? "fas fa-user"
                    : touched.name && !errors.name
                      ? "fas fa-check"
                      : touched.name && errors.name
                        ? "fas fa-times"
                        : "fas fa-user"
                }
                iconPosition="right"
                iconBackground={
                  !touched.name && !errors.name
                    ? "primary"
                    : touched.name && !errors.name
                      ? "success"
                      : touched.name && errors.name
                        ? "danger"
                        : "primary"
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
                    <Paragraph appearance="danger" size="sub">
                      {errors.name}
                    </Paragraph>
                  )}
              </FlexContainer>
              <label htmlFor="email">Email</label>
              <Input
                name="email"
                appearance={
                  !touched.email && !errors.email
                    ? "primary"
                    : touched.email && !errors.email
                      ? "success"
                      : touched.email && errors.email
                        ? "danger"
                        : "primary"
                }
                icon={
                  !touched.email && !errors.email
                    ? "fas fa-envelope"
                    : touched.email && !errors.email
                      ? "fas fa-check"
                      : touched.email && errors.email
                        ? "fas fa-times"
                        : "fas fa-envelope"
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
                    <Paragraph appearance="danger" size="sub">
                      {errors.email}
                    </Paragraph>
                  )}
              </FlexContainer>
              <label htmlFor="password">Password</label>
              <Input
                name="password"
                appearance={
                  !touched.password && !errors.password
                    ? "primary"
                    : touched.password && !errors.password
                      ? "success"
                      : touched.password && errors.password
                        ? "danger"
                        : "primary"
                }
                icon={
                  !touched.password && !errors.password
                    ? "fas fa-unlock"
                    : touched.password && !errors.password
                      ? "fas fa-check"
                      : touched.password && errors.password
                        ? "fas fa-times"
                        : "fas fa-unlock"
                }
                iconPosition="right"
                iconBackground={
                  !touched.password && !errors.password
                    ? "primary"
                    : touched.password && !errors.password
                      ? "success"
                      : touched.password && errors.password
                        ? "danger"
                        : "primary"
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
                    <Paragraph appearance="danger" size="sub">
                      {errors.password}
                    </Paragraph>
                  )}
              </FlexContainer>
            </FlexContainer>
            <Button disabled={isSubmitting}>Sign Up</Button>
          </FlexContainer>
        </form>
        <Paragraph appearance="white">
          Already have an account? <Link to="login">Log in here!</Link>
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
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    //TODO: send a request to db and check if the email already exists
    props.signupRequest(values);
  }
})(SignUpForm);

export default withStyles(({ themes, text, colors }) => {
  return {
    signUpForm: {
      ":nth-child(1n) form input": {
        margin: "0",
        borderRadius: "4px 0px 0px 4px"
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
