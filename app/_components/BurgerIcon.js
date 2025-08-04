import { motion } from "framer-motion";

function BurgerIcon({ isOpen, toggle }) {
  const topVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 8 },
  };

  const middleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -8 },
  };

  return (
    <button onClick={toggle} className="w-10 mr-8 h-10 relative z-50">
      <motion.span
        variants={topVariants}
        animate={isOpen ? "open" : "closed"}
        className="absolute h-1 w-8 bg-black"
        style={{ top: "10px" }}
      />
      <motion.span
        variants={middleVariants}
        animate={isOpen ? "open" : "closed"}
        className="absolute h-1 w-8 bg-black"
        style={{ top: "18px" }}
      />
      <motion.span
        variants={bottomVariants}
        animate={isOpen ? "open" : "closed"}
        className="absolute h-1 w-8 bg-black"
        style={{ top: "26px" }}
      />
    </button>
  );
}

export default BurgerIcon;
