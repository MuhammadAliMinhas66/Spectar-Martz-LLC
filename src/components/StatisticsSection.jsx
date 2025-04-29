// src/components/StatisticsSection.jsx
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { FiServer, FiShield, FiActivity, FiBarChart } from "react-icons/fi";
import { GiSkullShield } from "react-icons/gi"; // Import the GiSkullShield icon
import { useEffect, useState } from "react";

const StatCard = ({
  icon: Icon,
  title,
  value,
  description,
  color,
  isPercentage,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [borderVisible, setBorderVisible] = useState(false);

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? value : 0 },
    config: { duration: 2500 },
  });

  useEffect(() => {
    if (inView) {
      setBorderVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="group relative p-[2px] rounded-2xl overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} transition-opacity duration-1000 ${
          borderVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute -inset-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_3s_linear_infinite]"></div>
      </div>

      <div className="relative bg-[#0f172a] p-6 rounded-2xl h-full">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-lg bg-gradient-to-br ${color} relative overflow-hidden`}
          >
            <Icon className="text-2xl text-white" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 className="text-xl font-[Exo_2] font-semibold bg-gradient-to-r from-[#00ff87] to-[#60efff] text-transparent bg-clip-text">
            {title}
          </h3>
        </div>

        <animated.div className="text-4xl font-[Orbitron] mb-3 bg-gradient-to-r from-[#0d6efd] to-[#6610f2] text-transparent bg-clip-text">
          {number.to((n) =>
            isPercentage
              ? `${Math.floor(n)}%`
              : `+${Math.floor(n).toLocaleString()}`
          )}
        </animated.div>

        <p className="text-gray-400 text-sm font-[Exo_2] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  return (
    <section className="relative bg-[#0f172a] py-24 px-4 overflow-hidden">
      {/* Animated Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d6efd] via-[#8a2be2] to-[#6610f2] animate-[borderFlow_5s_linear_infinite] bg-[length:200%_auto]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d6efd] via-[#8a2be2] to-[#6610f2] animate-[borderFlow_7s_linear_infinite] bg-[length:200%_auto] opacity-50 mix-blend-screen blur-[2px]"></div>
      </div>

      {/* Background gradient elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-[#0d6efd] to-[#6610f2] rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-[#6610f2] to-[#0d6efd] rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center font-[Orbitron] mb-16">
          <span className="bg-gradient-to-r from-[#0d6efd] via-[#8a2be2] to-[#6610f2] text-transparent bg-clip-text">
            Why Choose Us?
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={FiServer}
            title="VPS Instances"
            value={85000}
            description="High-performance virtual servers in UK & USA data centers"
            color="from-[#0d6efd] to-[#0d6efd]/70"
          />

          <StatCard
            icon={GiSkullShield} // Use GiSkullShield here
            title="Secure Proxies"
            value={10245700}
            description="Dedicated residential and datacenter IPs available"
            color="from-[#6610f2] to-[#6610f2]/70"
          />

          <StatCard
            icon={FiActivity}
            title="Uptime Guarantee"
            value={9999}
            description="Actual uptime percentage expressed in a scaled format."
            color="from-[#0d6efd] to-[#6610f2]"
          />

          <StatCard
            icon={FiBarChart}
            title="Customer Satisfaction"
            value={99}
            description="High positive ratings from our satisfied customers."
            color="from-[#6610f2] to-[#0d6efd]"
            isPercentage
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 font-[Exo_2] text-sm">
            <span className="text-[#0d6efd]">▲</span> 24/7 Real-time Monitoring
            •<span className="mx-2">|</span>
            Last refresh: {new Date().toLocaleTimeString()}
            <span className="mx-2">|</span>
            <span className="text-[#6610f2]">▼</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
