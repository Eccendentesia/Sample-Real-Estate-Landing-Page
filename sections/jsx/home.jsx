import React from "react";
import "../css/home.css";
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP)
export const Home = () => {
   useGSAP(() => {
    gsap.from(".hero-content", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.from(".hero-image-container", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

  }, []);
  return (
    <>
      <section className="hero-section d-flex align-items-center" id="home">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 text-white hero-content">
              <p className="text-uppercase small hero-subtitle mb-3">
                Boutique Real Estate Advisory
              </p>

              <h1 className="mb-4">
                Strategic Property Consulting —<br />
                Built for Serious Investors.
              </h1>

              <p className="lead mb-4">
                We help investors identify, evaluate, and secure high-value real estate
                opportunities through data-driven strategy and market intelligence.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a href="#" className="btn hero-btn-primary btn-lg px-4">
                  Book Consultation
                </a>
                <a href="#" className="btn hero-btn-outline btn-lg px-4">
                  View Insights
                </a>
              </div>

              <p className="mt-4 small hero-trust">
                Trusted by 200+ property investors
              </p>
            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0 hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Luxury Real Estate"
                className="img-fluid hero-image"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};