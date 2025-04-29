import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-2xl" />,
      url: "https://wa.me/yournumber",
      color: "#ffffff", // White color for all icons
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-2xl" />,
      url: "https://instagram.com/yourprofile",
      color: "#ffffff",
    },
    {
      name: "LinkedIn (Seller)",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://linkedin.com/in/sellerprofile",
      color: "#ffffff",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-2xl" />,
      url: "https://facebook.com/yourpage",
      color: "#ffffff",
    },
  ];

  

  return (
    <footer className="relative bg-[#0f172a] border-t border-slate-800/50 min-h-[200px]">
      

      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            className="font-[Orbitron] text-2xl md:text-3xl bg-gradient-to-r from-[#0d6efd] to-[#8a2be2] bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            SpectarMartz Network
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/30 backdrop-blur-md hover:bg-slate-800/50 transition-all"
                style={{ color: link.color }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} SpectarMartz. All rights reserved.
          </div>
          <div className="text-slate-500 text-xs flex items-center justify-center gap-2">
            Developed by
            <a
              href="https://linkedin.com/in/muhammad-ali-minhas-53481230b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <FaLinkedin className="text-base" />
              Muhammad Ali Minhas
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
