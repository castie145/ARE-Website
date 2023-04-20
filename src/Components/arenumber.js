import React from "react";
import "./arenumber.css";

function Awards() {
  return (
    <div className="nbare">
      <h1>Let's talk about numbers</h1>
      <table>
        <tr>
          <td>
            <figure className="threeparts">
              <figcaption>
                <h2 className="titre">AWARDS</h2>
                <p>
                  since 2022 we have earned: <br />{" "}
                  <b>
                    <big>9 first place </big>
                  </b>{" "}
                  <br />{" "}
                  <b>
                    <big>5 second place </big>
                  </b>
                </p>
              </figcaption>
              <a href="#"></a>
              <img src="award.png" alt="sample45" />
            </figure>{" "}
          </td>
          <td>
            <figure className="threeparts">
              <figcaption>
                <h2 className="titre">450 MAMBERS</h2>
                <p>
                  "Coming together is a beginning, keeping together is progress,
                  working together is success"
                </p>
              </figcaption>
              <a href="#"></a>
              <img src="business-2863432_1280.png" alt="sample45" />
            </figure>
          </td>
          <td>
            <figure className="threeparts">
              <figcaption>
                <h2 className="titre">42 PROJECTS</h2>
                <p>#Ignite_The_Passion </p>
              </figcaption>
              <a href="#"></a>
              <img src="project1.png" alt="sample45" />
            </figure>{" "}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Awards;
