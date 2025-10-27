import { useFormik } from "formik";
import { useAuth } from "../hooks/useAuth";
import { addProjectSchema } from "../schemas/addProjectSchema";
import { toast } from "react-toastify";
import { useRef, useState } from "react";

function AddProjectPage() {
  const { token } = useAuth();
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const imageRef = useRef();

  async function uploadImage(file) {
    setUploading(true);
    const formData = new FormData();

    formData.append("image", file);
    console.log(file);

    const res = await fetch(
      "https://cas-bca.onrender.com/api/v1/projects/imageUploads",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      }
    );

    const data = await res.json();
    console.log(data);
    if (!data.success) {
      imageRef.current.value = "";
      toast.error(data.mssg);
    } else {
      setImage(data.image);
    }
    setUploading(false);
  }

  const onSubmit = async (values, actions) => {
    const postBody = { ...values, image };
    console.log(postBody);

    const res = await fetch("https://cas-bca.onrender.com/api/v1/projects", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    });

    const data = await res.json();
    console.log(data);
    if (data.success) {
      toast.success("Successfully Created Project");
      actions.resetForm();
      setImage(null);
      imageRef.current.value = "";
    } else {
      toast.error(data.mssg || "Something went wrong!");
    }
  };

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
      title: "",
      description: "",
      githubLink: "",
      liveLink: "",
    },
    validationSchema: addProjectSchema,
    onSubmit,
  });
  return (
    <div className="flex justify-center items-center flex-col min-h-screen pt-40 pb-20">
      <h1 className="text-4xl font-bold">Add Your Project</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-3/5 md:max-w-[600px] flex flex-col gap-5 mt-5 p-10 bg-white shadow-lg"
      >
        <label className="text-lg font-semibold">Title</label>
        <input
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Enter Project Title"
          name="title"
          id="title"
          className={
            errors.title && touched.title
              ? "border border-red-500 rounded-sm p-2"
              : "border border-gray-300 rounded-sm p-2"
          }
        />
        {errors.title && touched.title && (
          <p className="text-red-500">{errors.title}</p>
        )}

        <label className="text-lg font-semibold">Description</label>
        <input
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Enter Project Description"
          name="description"
          id="description"
          className={
            errors.description && touched.description
              ? "border border-red-500 rounded-sm p-2"
              : "border border-gray-300 rounded-sm  p-2"
          }
        />
        {errors.description && touched.description && (
          <p className="text-red-500">{errors.description}</p>
        )}

        <label className="text-lg font-semibold">Upload Image</label>
        <input
          required
          type="file"
          className=""
          name="image"
          onChange={(e) => uploadImage(e.target.files[0])}
          ref={imageRef}
        />

        {image && (
          <div className="w-100">
            <img src={image.url} alt="" className="w-full" />
          </div>
        )}

        <label className="text-lg font-semibold">GitHub Link</label>
        <input
          value={values.githubLink}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          name="githubLink"
          id="githubLink"
          className={
            errors.githubLink && touched.githubLink
              ? "border border-red-500 rounded-sm p-2"
              : "border border-gray-300 rounded-sm p-2"
          }
        />
        {errors.githubLink && touched.githubLink && (
          <p className="text-red-500">{errors.githubLink}</p>
        )}

        <label className="text-lg font-semibold">Live Link</label>
        <input
          value={values.liveLink}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          name="liveLink"
          id="liveLink"
          className={
            errors.liveLink && touched.liveLink
              ? "border border-red-500 rounded-sm p-2"
              : "border border-gray-300 rounded-sm p-2"
          }
        />
        {errors.liveLink && touched.liveLink && (
          <p className="text-red-500">{errors.liveLink}</p>
        )}

        <button
          disabled={isSubmitting || uploading}
          className="p-2 text-lg font-semibold rounded-md hover:cursor-pointer bg-amber-500  hover:bg-amber-400"
          type="submit"
        >
          {uploading ? "Uploading Image..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default AddProjectPage;
