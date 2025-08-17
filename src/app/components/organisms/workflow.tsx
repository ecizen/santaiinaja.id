import React, { useEffect } from "react";
import { Phone, Handshake, CreditCard, CheckCircle } from "lucide-react";

const CreativeJourney: React.FC = () => {
  useEffect(() => {
    const steps = document.querySelectorAll(".step");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.style.opacity = "1";
            target.style.transform = target.dataset.initialTransform!;
          }
        });
      },
      { threshold: 0.1 }
    );

    steps.forEach((step) => {
      const el = step as HTMLElement;
      el.dataset.initialTransform = window.getComputedStyle(el).transform;
      el.style.opacity = "0";
      el.style.transform = "translateY(50px) rotate(0deg)";
      el.style.transition =
        "opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      observer.observe(el);
    });
  }, []);

  return (
    <div className="journeyContainer bg-neutral-950">
      <div className="journeyHeader">
        <h1 className="j text-4xl text-pink-500">Professional Workflow</h1>
        <p className="journeySubtitle">
          Follow our streamlined process to ensure your tasks are handled efficiently and delivered on time.
        </p>
      </div>

      <div className="journeyPath">
        <div className="journeyLine"></div>

        <div className="floatingShapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>

        <div className="step step1">
          <div className="stepIcon"><Phone size={24} /></div>
          <h2 className="stepTitle">Contact & Submit Task</h2>
          <p className="stepDesc">
            Reach out to our admin and provide complete task details for review.
          </p>
        </div>

        <div className="step step2">
          <div className="stepIcon"><Handshake size={24} /></div>
          <h2 className="stepTitle">Agree on Terms</h2>
          <p className="stepDesc">
            Finalize pricing and deadline after discussing project requirements.
          </p>
        </div>

        <div className="step step3">
          <div className="stepIcon"><CreditCard size={24} /></div>
          <h2 className="stepTitle">Payment</h2>
          <p className="stepDesc">
            Complete the payment to officially start the project.
          </p>
        </div>

        <div className="step step4">
          <div className="stepIcon"><CheckCircle size={24} /></div>
          <h2 className="stepTitle">Completion & Delivery</h2>
          <p className="stepDesc">
            Receive your finalized task promptly with quality assurance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreativeJourney;
