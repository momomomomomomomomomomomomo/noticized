import { motion, AnimatePresence } from "framer-motion";
import useLockBodyScroll from "../_lib/useLockBodyScroll";

const Drawer = ({ isOpen, onClose, children }) => {
  const backdropVariants = {
    visible: { opacity: 0.5 },
    hidden: { opacity: 0 },
  };

  const drawerVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  useLockBodyScroll(isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="fixed top-0 right-0 h-full w-80  shadow-lg z-40 p-6 text-center bg-emerald-300"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
