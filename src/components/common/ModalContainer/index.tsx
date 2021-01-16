import React from "react";
import { motion } from "framer-motion";

const ModalContainer = ({ children }: { children: JSX.Element }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        display: "flex",
        position: "fixed",
        overflow: "scroll",
        height: "100vh",
        width: "100vw",
        background: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        zIndex: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ModalContainer;
