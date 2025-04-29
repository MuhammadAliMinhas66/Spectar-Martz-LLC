import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "ShadowHacker42",
      role: "Cyber Security",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 4.5,
      review:
        "Phantom Network made my ops completely untraceable. The military-grade encryption is unparalleled!",
      service: "General Ghost",
      serviceType: "proxy",
    },
    {
      id: 2,
      name: "DataWitch",
      role: "Blockchain Dev",
      image: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      review:
        "Quantum Storage revolutionized my data security. True zero-knowledge architecture!",
      service: "Major Power",
      serviceType: "vps",
    },
    {
      id: 3,
      name: "ByteBender",
      role: "Ethical Hacker",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 4,
      review:
        "Stealth Mode helped me disappear completely. Best investment in personal security!",
      service: "Sergeant Stealth",
      serviceType: "proxy",
    },
    {
      id: 4,
      name: "CipherGhost",
      role: "Dark Web Analyst",
      image: "https://i.pravatar.cc/150?img=4",
      rating: 5,
      review:
        "The onion routing implementation is flawless. Total anonymity guaranteed!",
      service: "Ghost Protocol",
      serviceType: "vpn",
    },
    {
      id: 5,
      name: "VoidWalker",
      role: "Pentester",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 4.5,
      review:
        "Decoy servers saved my operations multiple times. Brilliant redundancy system!",
      service: "Phantom Fleet",
      serviceType: "hosting",
    },
    {
      id: 6,
      name: "NeuraLynx",
      role: "AI Security",
      image: "https://i.pravatar.cc/150?img=6",
      rating: 5,
      review:
        "Quantum tunneling implementation is years ahead of competitors. Mind-blowing tech!",
      service: "Quantum Leap",
      serviceType: "network",
    },
    {
      id: 7,
      name: "Spectre",
      role: "White Hat",
      image: "https://i.pravatar.cc/150?img=7",
      rating: 4,
      review:
        "Data mirroring across black hole clusters? That's next-level security!",
      service: "Dark Matter",
      serviceType: "storage",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-48 h-48 opacity-10 rounded-full blur-xl"
          style={{
            background: `radial-gradient(circle, #0d6efd, #8a2be2)`,
          }}
          initial={{
            x: Math.random() * 100 - 50 + "%",
            y: Math.random() * 100 - 50 + "%",
            scale: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );

  const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex justify-center gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            className="w-5 h-5"
            viewBox="0 0 24 24"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            {i < fullStars ? (
              <path
                fill="#8a2be2"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
              />
            ) : hasHalfStar && i === fullStars ? (
              <path
                fill="#8a2be2"
                d="M22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"
              />
            ) : (
              <path
                fill="#8a2be2"
                d="M22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"
              />
            )}
          </motion.svg>
        ))}
      </div>
    );
  };

  return (
    <section className="relative bg-[#0f172a] py-12 px-4 overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-[Orbitron] bg-gradient-to-r from-[#0d6efd] to-[#8a2be2] bg-clip-text text-transparent mb-2">
            Trusted by Invisible Experts
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Where Even the Shadows Leave 5-Star Reviews
          </p>
        </motion.div>

        <div className="relative h-[360px] md:h-[380px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center px-4"
            >
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-xl p-6 border-2 border-slate-800/50 backdrop-blur-xl w-full max-w-2xl relative shadow-2xl">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <motion.div
                      className="w-14 h-14 rounded-full border-2 border-[#8a2be2] overflow-hidden"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="text-left">
                      <h3 className="font-[Orbitron] text-[#8a2be2] text-lg md:text-xl">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>

                  <motion.blockquote
                    className="text-slate-300 text-base md:text-lg mb-4 leading-relaxed italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    "{testimonials[currentIndex].review}"
                  </motion.blockquote>

                  <div className="flex items-center justify-between">
                    <RatingStars rating={testimonials[currentIndex].rating} />
                    <span className="text-sm text-[#0d6efd] font-[Orbitron]">
                      {testimonials[currentIndex].service}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <motion.button
            onClick={handlePrev}
            className="px-6 py-2 bg-[#0d6efd]/70 rounded-lg font-[Orbitron] text-sm text-white hover:bg-[#0d6efd] transition-colors border border-[#0d6efd]/30 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Previous
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="px-6 py-2 bg-[#8a2be2]/70 rounded-lg font-[Orbitron] text-sm text-white hover:bg-[#8a2be2] transition-colors border border-[#8a2be2]/30 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next →
          </motion.button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                currentIndex === index ? "bg-[#8a2be2]" : "bg-slate-600"
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
