"use client";

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const ClientTransitionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={path} variants={variants} initial="initial" animate="animate" exit="exit" className="w-full h-full">
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ClientTransitionWrapper;
