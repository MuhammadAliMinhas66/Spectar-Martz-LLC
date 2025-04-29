import React from "react";
import { motion } from "framer-motion";

const DealShowcase = () => {
  const proxyPlans = [
    {
      name: "Private Proxy",
      price: "9.99",
      features: ["Basic Anonymity", "3 Location Hopping", "Cat Meme Support"],
      ribbon: "yellow",
    },
    {
      name: "Sergeant Stealth",
      price: "19.99",
      features: ["Stealth Mode", "7 Location Ninjutsu", "VPN Disguise Kit"],
      ribbon: "red",
    },
    {
      name: "General Ghost",
      price: "29.99",
      features: [
        "Invisible Browsing",
        "Global Phantom Network",
        "Digital Exorcism",
      ],
      ribbon: "blue",
    },
  ];

  const vpsPlans = [
    {
      name: "Basic Package",
      price: "11.99",
      features: [
        "4096 MB RAM",
        "2 CPU Cores",
        "25 GB NVMe SSD",
        "2000 GB Bandwidth",
        "10 Gigabit port",
        "Admin Access",
        "Window's/Linux OS",
        "Quick Support",
        "Annual 15% Off",
      ],
      ribbon: "yellow",
    },
    {
      name: "Standard Package",
      price: "14.99",
      features: [
        "8192 MB RAM",
        "4 CPU Cores",
        "50 GB NVMe SSD",
        "2000 GB Bandwidth ",
        "10 Gigabit port ",
        "Admin Access",
        "Window's/Linux OS ",
        "Quick Support",
        "Annual 15% Off",
      ],
      ribbon: "red",
    },
    {
      name: "Professional Package",
      price: "21.99",
      features: [
        "16,384 MB RAM",
        "6 CPU Cores",
        "100 GB NVMe SSD",
        "4000 GB Bandwidth ",
        "10 Gigabit port ",
        "Admin Access ",
        "Window's/Linux OS ",
        "Quick Support",
        "Annual 15% Off",
      ],
      ribbon: "blue",
    },
  ];

  const Ribbon = ({ color, text }) => {
    const colors = {
      yellow: {
        bg: "bg-yellow-400",
        text: "text-white",
      },
      red: {
        bg: "bg-red-500",
        text: "text-white",
      },
      blue: {
        bg: "bg-blue-500",
        text: "text-white",
      },
    };

    return (
      <motion.div
        className={`absolute -top-2 -right-8 w-48 h-10 ${colors[color].bg} flex items-center justify-center shadow-lg z-20`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <span
            className={`text-sm font-[Orbitron] font-bold uppercase ${colors[color].text}`}
          >
            {text}
          </span>
          {/* Ribbon ends */}
          <div
            className="absolute -bottom-0 left-0 w-0 h-0 border-b-[20px] border-l-[20px] border-b-transparent"
            style={{ borderLeftColor: colors[color].bg }}
          />
          <div
            className="absolute -bottom-0 right-0 w-0 h-0 border-b-[20px] border-r-[20px] border-b-transparent"
            style={{ borderRightColor: colors[color].bg }}
          />
        </div>
      </motion.div>
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <section className="relative bg-[#0f172a] py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Pricing Columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Proxy Plans */}
          <div className="space-y-6">
            <motion.h3
              className="text-3xl font-[Orbitron] text-[#0d6efd] text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Proxy Plans
            </motion.h3>
            <div className="flex flex-col gap-6 h-auto md:h-[700px]">
              {proxyPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className="flex-1 bg-gradient-to-br from-slate-900/80 to-slate-800/20 p-8 rounded-xl border-2 border-slate-800/50 backdrop-blur-lg cursor-pointer relative overflow-hidden shadow-2xl hover:border-[#0d6efd]/40 transition-all"
                  whileHover={{ flex: 2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Ribbon
                    color={plan.ribbon}
                    text={
                      index === 0 ? "Basic" : index === 1 ? "Pro" : "Premium"
                    }
                  />

                  <motion.h4
                    className="text-2xl font-[Orbitron] text-[#0d6efd] mb-4 text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    {plan.name}
                  </motion.h4>
                  <motion.div
                    className="text-4xl font-bold text-slate-100 mb-6 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    ${plan.price}
                    <span className="text-sm text-slate-400">/mo</span>
                  </motion.div>
                  <motion.ul
                    className="space-y-4 text-slate-300"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {plan.features.map((feature) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-3 justify-center px-4 py-2 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors"
                        variants={listItemVariants}
                      >
                        <motion.div
                          className="w-2 h-2 bg-[#0d6efd] rounded-full flex-shrink-0"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                        <span className="text-center text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-[#0d6efd] to-[#0d6efd]/80 text-white font-[Orbitron] font-bold rounded-lg uppercase tracking-wider backdrop-blur-sm border-2 border-[#0d6efd]/50 hover:border-[#0d6efd]/80 hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Explore More
              </motion.button>
            </div>
          </div>

          {/* VPS Plans */}
          <div className="space-y-6">
            <motion.h3
              className="text-3xl font-[Orbitron] text-[#8a2be2] text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              VPS Plans
            </motion.h3>
            <div className="flex flex-col gap-6 h-auto md:h-[700px]">
              {vpsPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className="flex-1 bg-gradient-to-br from-slate-900/80 to-slate-800/20 p-8 rounded-xl border-2 border-slate-800/50 backdrop-blur-lg cursor-pointer relative overflow-hidden shadow-2xl hover:border-[#8a2be2]/40 transition-all"
                  whileHover={{ flex: 2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Ribbon
                    color={plan.ribbon}
                    text={
                      index === 0 ? "Basic" : index === 1 ? "Pro" : "Premium"
                    }
                  />

                  <motion.h4
                    className="text-2xl font-[Orbitron] text-[#8a2be2] mb-4 text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    {plan.name}
                  </motion.h4>
                  <motion.div
                    className="text-4xl font-bold text-slate-100 mb-6 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    ${plan.price}
                    <span className="text-sm text-slate-400">/mo</span>
                  </motion.div>
                  <motion.ul
                    className="space-y-4 text-slate-300"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {plan.features.map((feature) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-3 justify-center px-4 py-2 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors"
                        variants={listItemVariants}
                      >
                        <motion.div
                          className="w-2 h-2 bg-[#8a2be2] rounded-full flex-shrink-0"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                        <span className="text-center text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-[#8a2be2] to-[#8a2be2]/80 text-white font-[Orbitron] font-bold rounded-lg uppercase tracking-wider backdrop-blur-sm border-2 border-[#8a2be2]/50 hover:border-[#8a2be2]/80 hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Explore More
              </motion.button>
            </div>
          </div>
        </div>

        {/* Credential Ribbon */}
        <motion.div
          className="relative overflow-hidden py-6 border-y-2 border-slate-800/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-4 marquee px-2">
            {Array(4)
              .fill()
              .map((_, i) => (
                <React.Fragment key={i}>
                  <span className="font-bold font-[Orbitron] text-slate-300 text-sm md:text-base">
                    Military-grade encryption meets meme-grade pricing
                  </span>
                  <motion.div
                    className="w-2 h-2 bg-[#0d6efd] rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <span className="font-bold font-[Orbitron] text-slate-300 text-sm md:text-base">
                    Your data is safer than my ex's Instagram
                  </span>
                  <motion.div
                    className="w-2 h-2 bg-[#8a2be2] rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  />
                  <span className="font-bold font-[Orbitron] text-slate-300 text-sm md:text-base">
                    Servers faster than your WiFi router's regret
                  </span>
                  <motion.div
                    className="w-2 h-2 bg-[#6610f2] rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                  />
                </React.Fragment>
              ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .marquee {
          animation: scroll 40s linear infinite;
          display: flex;
          width: max-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee {
            animation-duration: 60s;
          }
        }
      `}</style>
    </section>
  );
};

export default DealShowcase;
