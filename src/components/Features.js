import React, { useState } from "react";
import monsoonGraphic from "./595198868_505x160.jpeg";
import beamsGraphic from "./589972810_530x315.jpeg";
import moveGraphic from "./590587169_530x315.jpeg";

function Features() {
  return (
    <>
      <body>
        {/* <!-- <div class="example">
        <iframe src="https://player.vimeo.com/video/186000920" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div> --> */}

        <div class = "feature" id="monsoon">
          <div class="container-right">
            <h1 id = "monsoon-header">Monsoon III</h1>
            <p id = "monsoon=description" class="feature-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt ipsum augue. In faucibus vehicula magna pulvinar
              aliquam. Cras aliquan feugiat lorem non auctor. Quisque sed lorem
              egestas mauris venenatis commodo eu id nibh. Ut porta libero sed
              semper faucibus.
            </p>
          </div>
          <div class="container-left">
            <img src={monsoonGraphic} alt="graphic" class="feature-image" />
            {/* <!-- <iframe src="https://player.vimeo.com/video/186000920" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> --> */}
          </div>
        </div>

        <div class = "feature" id="beams">
          <div class="container-left">
            <h1>Beams</h1>
            <p class="feature-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt ipsum augue. In faucibus vehicula magna pulvinar
              aliquam. Cras aliquan feugiat lorem non auctor. Quisque sed lorem
              egestas mauris venenatis commodo eu id nibh. Ut porta libero sed
              semper faucibus.
            </p>
          </div>
          <div class="container-right">
            <img src={beamsGraphic} alt="graphic" class="feature-image" />
          </div>
        </div>

        <div class = "feature" id="move">
          <div class="container-right">
            <h1>Move 2</h1>
            <p class="feature-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tincidunt ipsum augue. In faucibus vehicula magna pulvinar
              aliquam. Cras aliquan feugiat lorem non auctor. Quisque sed lorem
              egestas mauris venenatis commodo eu id nibh. Ut porta libero sed
              semper faucibus.
            </p>
          </div>
          <div class="container-left">
            <img src={moveGraphic} alt="graphic" class="feature-image" />
          </div>
        </div>
      </body>
    </>
  );
};
export default Features;
