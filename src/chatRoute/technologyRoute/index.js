import React, { useEffect } from "react";

const TechnologyRoute = () => {
  useEffect(() => {
    window.location.hash = window.location.hash.split("/")[0] + "home";
  }, []);

  useEffect(() => {
    const element = document.getElementById("skills");
    element && element.scrollIntoView();
  }, []);

  return (
    <>
      <p>
        I got a chance to work with multiple skills in my carrier. I like to
        explore new skills and try to hands on that technology. My key skills
        are Reat, Node, Angular, Next.js and Redux. I have worked with all
        javascript technology.
      </p>
      <table>
        <tr>
          <th>Technology</th>
        </tr>
        <tr>
          <td>JavaScript</td>
          <td>9+ Yr</td>
        </tr>
        <tr>
          <td>React</td>
          <td>8+ Yr</td>
        </tr>
        <tr>
          <td>Redux</td>
          <td>6 Yr</td>
        </tr>
        <tr>
          <td>Angular</td>
          <td>6+ Yr</td>
        </tr>
        <tr>
          <td>Node</td>
          <td>8+ Yr</td>
        </tr>
        <tr>
          <td>Mongo DB</td>
          <td>4+ Yr</td>
        </tr>
      </table>
    </>
  );
};

export default TechnologyRoute;
