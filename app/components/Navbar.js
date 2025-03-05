"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div className="relative w-full h-16 flex items-center p-6 mt-4">
      {/* Full-screen animation */}
      {!animationComplete && (
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: 0.1,
            top: "16px",
            left: "16px",
            opacity: 0,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          onAnimationComplete={() => setAnimationComplete(true)}
          className="fixed inset-0 h-[90vh] flex items-center justify-center z-50"
        >
          <div
            className='bg-green-600 text-9xl p-6 rounded-xl font-semibold'
            
          >{'<code18/>'}</div>
        </motion.div>
      )}

      {/* Navbar */}
      <nav className="flex w-full justify-between items-center">
        <div className="flex items-center">
          <motion.div
            className='bg-green-600 p-2 rounded py-1 font-semibold'
            initial={{ opacity: 0 }}
            animate={{ opacity: animationComplete ? 1 : 0 }}
            transition={{ delay: 0 }}
          >{'<code18/>'}</motion.div>
        </div>
        <div className="flex space-x-6 text-sm text-white">
          <Link className="cursor-pointer hover:text-green-600 hover:scale-110" href='#toolbox'>Toolbox</Link>
          <Link className="cursor-pointer hover:text-green-600 hover:scale-110" href='#projects'>Projects</Link>
          <Link className="cursor-pointer hover:text-green-600 hover:scale-110" href='#contact'>Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
