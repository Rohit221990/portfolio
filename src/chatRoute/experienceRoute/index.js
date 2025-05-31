import React, { useEffect } from "react";

const ExperienceRoute = () => {
  useEffect(() => {
    window.location.hash = window.location.hash.split("/")[0] + "experience";
  }, []);

  return (
    <p>
      I have worked with multiple domains in IT Industry like HeathCare,
      Insurance, Retail and Telecom as software developer. I lov to explore the
      industry business and new technologies.
    </p>
  );
};

export default ExperienceRoute;
