import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

function App() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          var headerOffset = 96;
          var elementPosition = element.getBoundingClientRect().top;
          var offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition });
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectPage />}></Route>
    </Routes>
  );
}

export default App;
