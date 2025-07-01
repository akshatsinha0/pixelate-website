import React from 'react';
import styles from './card.module.css';

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div {...props} className={`${styles.card} ${className || ''}`}>
    {children}
  </div>
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div {...props} className={`${styles.cardHeader} ${className || ''}`}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => (
  <h2 {...props} className={`${styles.cardTitle} ${className || ''}`}>
    {children}
  </h2>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div {...props} className={`${styles.cardContent} ${className || ''}`}>
    {children}
  </div>
);
