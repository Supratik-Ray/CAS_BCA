import { useEffect } from "react";
import { toast } from "react-toastify";

import About from "../Components/about";
import Contact from "../Components/Contact";
import Events from "../Components/events";

import Home from "../Components/Home";
import { useLocation, useNavigate } from "react-router-dom";

function HomePage() {
  const { hash, state, pathname } = useLocation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!hash) return;
    if (hash === "#") {
      navigate(location.pathname + location.search, { replace: true });
    }
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, location.pathname, location.search, navigate]);

  useEffect(() => {
    if (state?.showLoginToast) {
      toast.success("Successfully logged in!");
      navigate(pathname, { replace: true });
    }
  }, [state?.showLoginToast, pathname, navigate]);

  return (
    <>
      <Home />
      <About />
      <Events />
      <Contact />
    </>
  );
}

export default HomePage;
