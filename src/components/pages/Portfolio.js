import React from "react";
import sampleWork1 from "../../images/sample-work-1.png";
import sampleWork2 from "../../images/sample-work-2.png";
import sampleWork3 from "../../images/sample-work-3.png";
import sampleWork4 from "../../images/sample-work-4.png";
import sampleWork5 from "../../images/sample-work-5.png";

export default function Portolfio() {
  const imageStyle = { width: "25%" };
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        <a href="https://jdeshaies.github.io/movie-search-project/">
          <img
            style={imageStyle}
            src={sampleWork1}
            alt="Clapperboard on yellow background with popcorn"
          />
        </a>
      </div>
      <div>
        <a href="https://github.com/ChrisJCota/phudi">
          <img
            style={imageStyle}
            src={sampleWork2}
            alt="Two people working over desk with laptop, camera, and business chart"
          />
        </a>
      </div>
      <div>
        <a href="https://jdeshaies.github.io/weather-dashboard/">
          <img
            style={imageStyle}
            src={sampleWork3}
            alt="Lightening strikes during thunderstorm"
          />
        </a>
      </div>
    </div>
  );
}
