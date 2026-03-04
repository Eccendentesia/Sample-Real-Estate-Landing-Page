import React, { useRef } from "react";
import "../css/contact.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Contact = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.from(q(".contact-heading-animate"), {
      scrollTrigger: {
        trigger: q(".contact-heading-animate"),
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(q(".contact-box-animate"), {
      scrollTrigger: {
        trigger: q(".contact-box-animate"),
        start: "top 75%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="contact-section py-5" id="contact">
      <div className="container">

        <div className="text-center my-5 contact-heading-animate">
          <h2 className="contact-title">
            Let’s Structure Your Next Investment
          </h2>
          <p className="contact-subtitle">
            Confidential advisory for serious property investors.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 contact-box-animate">

            <div className="contact-card">

              <div className="row">
                {/* Left Info */}
                <div className="col-md-5 contact-info">
                  <h5 className="gold-text">Private Advisory Office</h5>
                  <p>Mumbai, India</p>

                  <h6 className="mt-4 gold-text">Email</h6>
                  <p>advisory@yourfirm.com</p>

                  <h6 className="mt-4 gold-text">Direct Line</h6>
                  <p>+91 98765 43210</p>

                  <p className="mt-4 small muted-text">
                    All consultations are strictly confidential.
                  </p>
                </div>

                {/* Right Form */}
                <div className="col-md-7">
                  <form className="contact-form">

                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="form-control luxury-input"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-control luxury-input"
                        required
                      />
                    </div>

                    <button type="submit" className="luxury-btn w-100">
                      Request Confidential Consultation
                    </button>

                  </form>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};