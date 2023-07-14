import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>ThinqPixel</h1>
          <p>Solution To All Your Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphic" />

        <div>
          <p>
            We are bflkadnf hadlfnladfn ahflkadnfa fhasfpe lkadlksandsa
            naldnalsndoj adhjashdpsai ahfpaihf pa apfapf kosakd
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who We Are?</h1>
          <p>
            Dell Inc., formerly PC's Limited (1984–88) and Dell Computer
            Corporation (1988–2003), global company that designs, develops, and
            manufactures personal computers (PCs) and a variety of
            computer-related products. The company is one of the world's leading
            computer brands and suppliers of PCs
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
