import * as yup from "yup";

export const addProjectSchema = yup.object().shape({
  title: yup.string().required("Please enter a project title"),
  description: yup.string().required("Please add a description"),
  githubLink: yup
    .string()
    .url("GitHub Link must be valid")
    .required("Please enter url"),
  liveLink: yup
    .string()
    .url("Live Link must be valid")
    .required("Please enter url"),
});
