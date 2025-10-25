import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "6c3b3491-53f5-4dd3-9fd0-a21ab2c9736b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Failed. Try Again!");
      alert(data.message);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-5"
    >
      {/* Header */}
      <div className='max-w-[800px] mx-auto p-5'>
            <h1 className='text-blue-900 font-bold text-4xl text-center'>Contact With Us</h1>
            <p className='text-center pt-5 text-lg'>ready to make move with us?</p>
        </div>

      {/* Inputs */}
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1">
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          name="message"
          placeholder="Write your message..."
          required
          className="w-full p-2 border rounded-md h-32 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Button */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 rounded-xl bg-blue-800 text-white hover:bg-blue-900 transition cursor-pointer"
        >
          {result ? result : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default Contact;
