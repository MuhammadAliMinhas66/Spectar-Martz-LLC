// src/pages/VPS.jsx
import { useNavigate } from "react-router-dom";
import { FiServer, FiGlobe, FiZap } from "react-icons/fi";

const VPSCard = ({ title, location, specs, link }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0f172a] p-8 rounded-2xl border border-white/10 hover:border-[#0d6efd]/30 transition-all duration-300 relative overflow-hidden group">
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-[#0d6efd] to-[#6610f2] blur-xl" />

      <div className="relative z-10">
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#0d6efd] to-[#6610f2] text-white">
            {title.includes("UK") ? (
              <FiGlobe className="text-3xl" />
            ) : (
              <FiZap className="text-3xl" />
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6 font-[Exo_2] bg-gradient-to-r from-[#0d6efd] to-[#6610f2] text-transparent bg-clip-text">
          {title}
        </h3>

        <div className="space-y-4 mb-8 font-[Inter] text-gray-300">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm md:text-base"
            >
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0d6efd] to-[#6610f2] text-white text-xs">
                ✓
              </span>
              {spec}
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate(link)}
          className="w-full mt-auto text-sm font-semibold bg-gradient-to-r from-[#0d6efd] to-[#6610f2] px-6 py-3 rounded-xl hover:from-[#0d6efd]/90 hover:to-[#6610f2]/90 transition-all hover:shadow-[0_5px_20px_-5px_rgba(13,110,253,0.3)]"
        >
          Configure Now →
        </button>
      </div>
    </div>
  );
};

const VPS = () => {
  const vpsOptions = [
    {
      title: "UK VPS Hosting",
      location: "London, UK",
      specs: [
        "Ultra-Low Latency Network",
        "NVMe SSD Storage",
        "DDoS Protection Included",
        "24/7 Priority Support",
      ],
      link: "/uk-vps",
    },
    {
      title: "USA VPS Hosting",
      location: "New York, USA",
      specs: [
        "High-Performance Nodes",
        "Instant Scalability",
        "99.99% Uptime Guarantee",
        "Military-Grade Encryption",
      ],
      link: "/usa-vps",
    },
  ];

  return (
    <section className="bg-[#0f172a] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center font-[Orbitron] mb-20">
          <span className="bg-gradient-to-r from-[#0d6efd] via-[#8a2be2] to-[#6610f2] text-transparent bg-clip-text animate-gradient">
            Premium VPS Solutions
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {vpsOptions.map((option, index) => (
            <VPSCard key={index} {...option} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VPS;
