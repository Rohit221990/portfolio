import React, { useEffect } from "react";

const EducationRoute = () => {
  useEffect(() => {
    window.location.hash = window.location.hash.split("/")[0] + "education";
  }, []);

  return <p>I have completed B Tech in computer science in 2013.</p>;
};

export default EducationRoute;
