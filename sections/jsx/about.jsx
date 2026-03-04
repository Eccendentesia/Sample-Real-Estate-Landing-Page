import React from "react";
import "../css/about.css";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
export const About = () => {
  useGSAP(()=>{
    gsap.from('.about-gsap',{
      y:100,
      opacity:0,
      duration:0.9,
      stagger: 0.2,
      delay:0.5, 
      scrollTrigger:{
        trigger:".about-section",
          start:"top 60%",
          end:"bottom 90%",
          scrub:false,
      
      }
    })

    const t_bottom = gsap.timeline({
      scrollTrigger:{
        trigger:".about-gsap-bottom",
        start:"top 70%",
        end:"bottom 70%",
        scrub:false,
      
      }
    })
    t_bottom.from('.about-gsap-bottom-card-1',{
      x:-100,
      duration:1.2,
      opacity:0,
      stagger:1
    })
    t_bottom.from('.about-gsap-bottom-card-2',{
      x:100,
      duration:1.2,
      opacity:0,
      stagger:1
    })
  })
  return (
    <section className="about-section  py-5" id="about">

      <div className="row align-items-center mx-lg-5 mx-2 my-5 ">

        {/* LEFT CONTENT */}
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="about-title about-gsap">Our Team</h1>
          <h5 className="about-subtitle about-gsap">Meet the entire team</h5>
          <p className="about-description about-gsap">
            At UrbanAxis™, our team combines deep market expertise with
            strategic investment insight. We help property owners maximize
            returns through data-driven decisions and proactive management.
          </p>

          <div className="row mt-4">
            <div className="col-md-6 mb-4">
              <h6 className="about-mini-title about-gsap">Culture</h6>
              <div className="mini-line"></div>
              <p className="mini-text about-gsap">
                Transparent collaboration and strategic thinking drive our
                client success. Every advisor works closely with investors.
              </p>
            </div>

            <div className="col-md-6 mb-4">
              <h6 className="about-mini-title about-gsap">Workplace</h6>
              <div className="mini-line"></div>
              <p className="mini-text about-gsap">
                A dynamic and innovative environment where market research,
                analytics, and client strategy meet.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT TEAM GRID */}
        <div className="col-lg-6 text-center ">
          <div className="diamond-grid">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" />
            <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="" />
            <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="" />
          </div>
        </div>

      </div>

      {/* BOTTOM CARDS */}
      <div className="row mt-5 mx-lg-5 mx-2 about-gsap-bottom">

        <div className="col-md-6 mb-4 about-gsap-bottom-card-1">
          <div className="about-card text-center">
            <div className="play-btn">▶</div>
            <h5>Our Vision</h5>
            <p>
              Delivering excellence in real estate consulting and building
              long-term wealth for property investors.
            </p>
            <button className="btn btn-outline-primary">
              Full Details
            </button>
          </div>
        </div>

        <div className="col-md-6 mb-4 about-gsap-bottom-card-2">
          <div className="about-card">
            <small className="text-primary fw-bold">News</small>
            <h5 className="mt-2">Market Expansion</h5>
            <p>
              UrbanAxis™ expands into commercial advisory across major metro
              cities. Strengthening investor opportunities nationwide.
            </p>
            <span className="arrow">→</span>
          </div>
        </div>

      </div>

    </section>
  );
};