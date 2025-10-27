import * as yup from "yup";

const passwordRules = /^(?=.*[A-Z])(?=.*\d).{5,}$/;

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required!")
    .min(3, "Username must be at least 2 characters long")
    .max(20, "Username cannot exceed 20 characters"),
  email: yup
    .string()
    .email("please enter a valid email.")
    .required("Email is required!"),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "Password must be at least 6 characters long, contain at least one uppercase letter, and at least one number.",
    })
    .required("Password is required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Both passwords must match!")
    .required("Confirm password is required!"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email.")
    .required("Email is required!"),
  password: yup.string().required("Password is required!"),
});
