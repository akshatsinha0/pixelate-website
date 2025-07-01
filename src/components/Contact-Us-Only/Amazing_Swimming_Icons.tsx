import React from 'react';
import { motion } from 'framer-motion';

interface AmazingSwimmingIconsProps {
  icons: React.ElementType[];
  styles: {
    floatingIcon: string;
  };
  variants: import('framer-motion').Variants;
}

const AmazingSwimmingIcons: React.FC<AmazingSwimmingIconsProps> = ({ icons, styles, variants }) => (
  <div>
    {icons.map((Icon, i) => (
      <motion.div
        key={i}
        className={styles.floatingIcon}
        style={{
          left: `${10 + (i * 7) % 80}%`,
          top: `${15 + (i * 11) % 70}%`
        }}
        variants={variants}
        animate="animate"
        custom={i}
      >
        <Icon size={20 + (i % 3) * 10} />
      </motion.div>
    ))}
  </div>
);

export default AmazingSwimmingIcons; 