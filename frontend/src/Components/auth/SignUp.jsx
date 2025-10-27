import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { signUpSchema } from "../../schemas/authSchemas";
import { FaSpinner } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";

function SignUp() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(values, actions) {
    try {
      const { name, email, password } = values;
      const res = await fetch(
        "https://cas-bca.onrender.com/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await res.json();
      console.log(data);

      if (data.success) {
        login(data.user, data.token);
        toast.success("Successfully registered account!");
        actions.resetForm();
        navigate("/", { replace: true });
        return;
      } else {
        toast.error("Some error occured!");
      }
    } catch (error) {
      console.error(`some error occured: ${error.message}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-3/5 md:max-w-[600px] flex flex-col gap-5 p-10 bg-white shadow-lg"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-sm  p-2"
          placeholder="Enter your Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          id="name"
        />
        {errors.name && touched.name ? (
          <p className="text-sm text-red-500">{errors.name}</p>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          type="email"
          className="border border-gray-300 rounded-sm  p-2"
          placeholder="Enter your Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
        />
        {errors.email && touched.email ? (
          <p className="text-sm text-red-500">{errors.email}</p>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          type="password"
          className="border border-gray-300 rounded-sm  p-2"
          placeholder="Enter your Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
        />

        {errors.password && touched.password ? (
          <p className="text-sm text-red-500">{errors.password}</p>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="confirmPassword" className="font-semibold">
          Confirm Password
        </label>
        <input
          type="password"
          className="border border-gray-300 rounded-sm  p-2"
          placeholder="Re-type your Password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          id="confirmPassword"
        />
        {errors.confirmPassword && touched.confirmPassword ? (
          <p className="text-sm text-red-500">{errors.confirmPassword}</p>
        ) : (
          ""
        )}
      </div>
      <Link to={"/cas_bca.sit/auth/login"}>
        <p className="text-blue-600 text-sm hover:cursor-pointer hover:text-blue-800">
          Already logged in? Login
        </p>
      </Link>
      <button
        disabled={isSubmitting}
        className="bg-amber-500 flex justify-center items-center gap-2 font-semibold py-2 rounded-sm hover:cursor-pointer hover:bg-amber-400"
        type="submit"
      >
        {isSubmitting && <FaSpinner className="animate-spin" size={18} />}
        {isSubmitting ? "Signing up..." : "SignUp"}
      </button>
    </form>
  );
}

export default SignUp;
