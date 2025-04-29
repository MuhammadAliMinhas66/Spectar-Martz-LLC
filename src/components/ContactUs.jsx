import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Input interaction animations
    gsap.utils.toArray("input, textarea").forEach((input) => {
      input.addEventListener("focus", () => {
        gsap.to(input, {
          borderColor: "#facc15",
          duration: 0.3,
        });
      });
      input.addEventListener("blur", () => {
        gsap.to(input, {
          borderColor: "#facc1566",
          duration: 0.3,
        });
      });
    });

    return () => gsap.globalTimeline.clear();
  }, []);

  const getAliasMessage = () => {
    if (alias.length < 1) return "";
    if (alias.length < 3) return "🚨 That's not a real spy name!";
    if (alias.toLowerCase().includes("bond")) return "🔫 007 detected!";
    return "🕶️ Perfect alias, agent!";
  };

  const getEmailMessage = () => {
    if (email.length < 1) return "";
    if (!email.includes("@")) return "🤖 Nice try, robot!";
    if (email.includes("classified")) return "🔒 Ultra secure!";
    return "📧 Encryption protocols engaged!";
  };

  const getMessageWarning = () => {
    if (message.length < 1) return "";
    if (message.length < 10) return "💬 Needs more drama!";
    if (message.toLowerCase().includes("urgent")) return "🚨 Priority message!";
    return "🔐 Message will self-destruct in 5...";
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#0f172a] py-16 px-4 overflow-hidden">
      {/* Improved Caution Tape */}
      <div className="absolute top-0 left-0 w-full z-20 overflow-hidden py-2">
        <div
          className="w-full h-8 flex items-center justify-center relative overflow-hidden"
          style={{
            background: `
              repeating-linear-gradient(
                -45deg,
                #000000,
                #000000 10px,
                #facc15 10px,
                #facc15 20px
              )
            `,
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="flex items-center space-x-4 animate-marquee whitespace-nowrap">
            <span className="text-black font-black uppercase text-[clamp(0.8rem,1.5vw,1.2rem)] tracking-[0.5em]">
              ⚠️ RESTRICTED ACCESS • CLASSIFIED COMMUNICATION CHANNEL ⚠️
            </span>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <motion.div
        className="relative max-w-2xl mx-auto mt-32 p-8 rounded-lg border-4 border-yellow-400 bg-slate-900/80 backdrop-blur-lg shadow-2xl z-30"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center font-mono">
          Contact Us
        </h2>

        <form className="space-y-8">
          <div className="relative">
            {alias.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-5 left-2 text-yellow-400 text-sm font-mono"
              >
                {getAliasMessage()}
              </motion.div>
            )}
            <input
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800/50 border-2 border-yellow-400/30 rounded-lg text-slate-100 placeholder-yellow-400/60 font-mono focus:outline-none"
              placeholder="Enter your codename..."
              required
            />
          </div>

          <div className="relative">
            {email.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-5 left-2 text-yellow-400 text-sm font-mono"
              >
                {getEmailMessage()}
              </motion.div>
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800/50 border-2 border-yellow-400/30 rounded-lg text-slate-100 placeholder-yellow-400/60 font-mono focus:outline-none"
              placeholder="Enter encrypted email..."
              required
            />
          </div>

          <div className="relative">
            {message.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-5 left-2 text-yellow-400 text-sm font-mono"
              >
                {getMessageWarning()}
              </motion.div>
            )}
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800/50 border-2 border-yellow-400/30 rounded-lg text-slate-100 placeholder-yellow-400/60 font-mono focus:outline-none"
              placeholder="Type your classified message..."
              required
            ></textarea>
          </div>

          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold rounded-lg uppercase tracking-wider border-2 border-yellow-600 transition-all font-mono"
            >
              Talk to Humans!
            </button>
          </motion.div>
        </form>
      </motion.div>

      {/* Animated Elements */}
      <div className="absolute top-1/3 left-10 w-8 h-8 border-4 border-yellow-400 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-8 h-8 border-4 border-yellow-400 rounded-full animate-pulse delay-100" />
    </section>
  );
};

export default ContactUs;
