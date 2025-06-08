import React, { useEffect } from "react";

const Customlink = (request) => {
  useEffect(() => {
    console.log(request?.previousStep?.message);
  }, []);

  return (
    <>
      I have completed my B.Tech degree from{" "}
      <a target="_blank" href="https://jecrcfoundation.com/">
        JECRC-UDML
      </a>{" "}
      Engineering college.
    </>
  );
};

export default Customlink;
