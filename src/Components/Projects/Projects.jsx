import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiCss3,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";

import foodImg from "../../assets/food.png";
import ecomImg from "../../assets/e-com.png";
import mamaearthImg from "../../assets/mamaearth.png";
import vedixImg from "../../assets/vedix.png";
import youtubeImg from "../../assets/youtube.png";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={ecomImg} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Ecommerce Website</h2>
                <p>
                  A Ecommerce website which has two type of products (Mes's and
                  Women's).
                </p>
                <div>
                  <SiReactrouter />
                  <SiReact />
                  <SiHtml5 />
                  <SiCss3 />
                </div>
                <div>
                  <a
                    href="https://my-ecommerce-tau.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/KanishkaRajputd/MyEcommerce.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={vedixImg} alt="Vedix-Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Vedix-Clone</h2>
                <p>
                  A website that provides toxin-free skincare and hair care
                  products , for babies and adults.
                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://vedix-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/KanishkaRajputd/vedix-clone.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={mamaearthImg} alt="Mamaearth-Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Mamaearth-Clone</h2>
                <p>
                  A website providing toxin-free, natural baby care, skincare,
                  and hair care products.
                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://mamaearth-clone-u2.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/KanishkaRajputd/mamaearth.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={youtubeImg} alt="YouTube-Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>YouTube -Clone</h2>
                <p>
                  A video-sharing platform used to watch videos from all around
                  the world.
                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://myminiyoutube.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/KanishkaRajputd/Youtube.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={foodImg} alt="Food Website" />
                </div>
              </div>
              <div className="project_information">
                <h2>Food Website</h2>
                <p>
                  A simple food website on which you can search any of the
                  perticular food and order it.
                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://foodieskhushy.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/KanishkaRajputd/Food.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
