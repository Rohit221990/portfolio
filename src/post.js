import React, { useEffect, useState } from "react";

const Post = (request) => {
  const [message, setMesssage] = useState(undefined);

  useEffect(async () => {
    console.log(
      "request?.previousStep?.message",
      request?.previousStep?.message
    );
    if (request?.previousStep?.message) {
      const data = await fetch(
        `/portfolio/chat?message=${request?.previousStep?.message}`
      );
      const val = await data.json();
      setMesssage(val.message);
    }
  }, [request?.previousStep?.message]);

  console.log("message", message);

  return (
    <>
      <div>
        <div>{message}</div>
      </div>
    </>
  );
};
export default Post;
