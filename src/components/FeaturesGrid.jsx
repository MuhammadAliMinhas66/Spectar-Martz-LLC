// src/components/FeaturesGrid.jsx
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { FiGlobe, FiServer, FiShield } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, features, link }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate();

  const cardSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(30px)",
    config: { tension: 200, friction: 20 },
  });

  const [hoverSpring, api] = useSpring(() => ({
    from: { scale: 1, boxShadow: "0 0 0 rgba(13, 110, 253, 0)" },
  }));

  const handleHover = () => {
    api.start({
      to: [
        { scale: 1.02, boxShadow: "0 10px 30px -10px rgba(13, 110, 253, 0.3)" },
        { scale: 1.03, boxShadow: "0 15px 40px -10px rgba(13, 110, 253, 0.4)" },
      ],
      config: { tension: 300, friction: 10 },
    });
  };

  const handleHoverEnd = () => {
    api.start({
      to: { scale: 1, boxShadow: "0 0 0 rgba(13, 110, 253, 0)" },
      config: { tension: 280, friction: 15 },
    });
  };

  return (
    <animated.div ref={ref} style={cardSpring} className="relative group">
      <animated.div
        style={hoverSpring}
        className="bg-[#0f172a] p-8 rounded-2xl h-full border border-white/10 hover:border-[#0d6efd]/30 transition-all duration-300 relative overflow-hidden"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
      >
        {/* Gradient glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-[#0d6efd] to-[#6610f2] blur-xl" />

        <div className="relative z-10">
          <div className="mb-6 flex justify-center">
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d6efd] to-[#6610f2] text-white">
              <Icon className="text-3xl" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-6 font-[Exo_2] bg-gradient-to-r from-[#0d6efd] to-[#6610f2] text-transparent bg-clip-text">
            {title}
          </h3>

          <ul className="space-y-4 mb-8 font-[Inter] text-gray-300">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-sm md:text-base"
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0d6efd] to-[#6610f2] text-white text-xs">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate(link)}
            className="w-full text-white mt-auto text-sm font-semibold bg-gradient-to-r from-[#0d6efd] to-[#6610f2] px-6 py-3 rounded-xl hover:from-[#0d6efd]/90 hover:to-[#6610f2]/90 transition-all hover:shadow-[0_5px_20px_-5px_rgba(13,110,253,0.3)]"
          >
            Explore Features →
          </button>
        </div>
      </animated.div>
    </animated.div>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: FiGlobe,
      title: "Global Proxy Network",
      features: [
        "40+ Worldwide Server Locations",
        "Dynamic Residential IP Rotation",
        "99.99% Uptime SLA Guarantee",
        "Unmetered Premium Bandwidth",
      ],
      link: "/proxies",
    },
    {
      icon: FiServer,
      title: "Elite VPS Hosting",
      features: [
        "Military-Grade AES-256 Encryption",
        "NVMe SSD Accelerated Storage",
        "24/7 Real-Time Monitoring",
        "Instant Cloud Deployment",
      ],
      link: "/vps",
    },
  ];

  return (
    <section className="bg-[#0f172a] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center font-[Orbitron] mb-20">
          <span className="bg-gradient-to-r from-[#0d6efd] via-[#8a2be2] to-[#6610f2] text-transparent bg-clip-text animate-gradient">
            Core Services
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
