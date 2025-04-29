// src/components/Hero.jsx
import { useState, useEffect } from "react";
import SplitText from "../animations/SplitText";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCta, setShowCta] = useState(false);

  // Animation for subtitle
  const subtitleSpring = useSpring({
    opacity: showSubtitle ? 1 : 0,
    transform: showSubtitle ? "translateY(0)" : "translateY(20px)",
    config: { tension: 200, friction: 20 },
  });

  // Animation for CTA button
  const ctaSpring = useSpring({
    opacity: showCta ? 1 : 0,
    transform: showCta ? "translateY(0)" : "translateY(20px)",
    delay: 500,
    config: { tension: 180, friction: 12 },
  });

  useEffect(() => {
    if (showSubtitle) {
      setTimeout(() => setShowCta(true), 1000);
    }
  }, [showSubtitle]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <SplitText
            text="Experience Next-Gen Networking"
            className="text-4xl md:text-6xl font-bold mb-8 font-[Orbitron] tracking-tighter hover:text-[#0d6efd] transition-colors duration-300"
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,80px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutExpo"
            onLetterAnimationComplete={() => setShowSubtitle(true)}
          />
        </div>

        <animated.p
          style={subtitleSpring}
          className="text-lg md:text-xl text-gray-300 mt-10 mb-12 max-w-3xl mx-auto leading-relaxed font-[Exo_2]"
        >
          <span className="text-[#0d6efd] font-semibold hover:brightness-125 transition-all duration-300 cursor-text">
            Lightning-Fast
          </span>{" "}
          global proxies &
          <span className="text-[#6610f2] font-semibold hover:brightness-125 transition-all duration-300 cursor-text">
            {" "}
            Military-Grade
          </span>{" "}
          VPS hosting. Enjoy 99.99% uptime, 24/7 expert support, and
          enterprise-grade security for seamless digital operations.
        </animated.p>

        <animated.div style={ctaSpring}>
          <button
            onClick={() => navigate("/get-started")}
            className="bg-gradient-to-r from-[#0d6efd] to-[#6610f2] hover:from-[#0b5ed7] hover:to-[#570dcf] text-base px-8 py-4 rounded-full font-semibold tracking-wide transition-all transform hover:scale-105 shadow-lg hover:shadow-[#0d6efd]/30 group"
          >
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              Get Started Now →
            </span>
          </button>
          <p className="mt-4 text-xs text-gray-400 font-[Inter]">
            24/7 Expert Support • Enterprise-Grade Security
          </p>
        </animated.div>
      </div>
    </section>
  );
};

export default Hero;
