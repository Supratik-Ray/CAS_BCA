import React from "react";
import logo from "../assets/cas_logo.png";

function Home() {
  const handleClick = () => {
    const whatsAppLink = "https://chat.whatsapp.com/BhEtOii34mF9rCl8vwqAf9";
    window.open(whatsAppLink, "_blank");
  };
  return (
    <div id="Home">
      <div className="w-full bg-blue-900 p-10">
        <div className="flex flex-col justify-center items-center gap-15">
          <div className="pt-20 md:pt-35 text-center max-w-[800px] my-auto mx-auto h-full">
            <div className="flex flex-col md:flex-row items-center gap-2 justify-center">
              <img src={logo} className="h-25 w-25" />
              <h1 className="text-white text-4xl font-bold lg:text-5xl">
                Computer Application Society
              </h1>
            </div>
            <p className="text-white text-lg pt-5 font-light">
              Empowering the next generation of tech innovators through
              competitive programming, hackathons, and knowledge-sharing
              initiatives that foster excellence in computer applications.
            </p>
          </div>
          <div className="flex gap-5 mb-15 flex-col md:flex-row">
            <button
              onClick={handleClick}
              className="font-bold bg-amber-400 rounded-lg md:p-4 py-4 px-15  hover:bg-amber-500 cursor-pointer"
            >
              Join Society
            </button>
            <button className="border bg-transparent text-white md:px-5.5 py-4 px-15 rounded-lg hover:bg-white cursor-pointer hover:text-blue-900 transition-color duration-500">
              <a href="#Events">Explore Events</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
