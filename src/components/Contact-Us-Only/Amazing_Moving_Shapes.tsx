import React from 'react';
import { motion } from 'framer-motion';

interface AmazingMovingShapesProps {
  classNames: string[];
}

const AmazingMovingShapes: React.FC<AmazingMovingShapesProps> = ({ classNames }) => (
  <>
    {classNames.map((className, idx) => (
      <motion.div
        key={idx}
        className={className}
        animate={{
          borderRadius: ["50%", "25%", "50%", "75%", "50%"],
          background: [
            "linear-gradient(45deg, #56299D, #7E61AC)",
            "linear-gradient(90deg, #7E61AC, #F6EFEE)",
            "linear-gradient(135deg, #F6EFEE, #56299D)",
            "linear-gradient(180deg, #56299D, #7E61AC)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </>
);

export default AmazingMovingShapes; 