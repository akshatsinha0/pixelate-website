import React from 'react';
import styles from './label.module.css';

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ className, children, ...props }) => (
  <label {...props} className={`${styles.label} ${className || ''}`}>
    {children}
  </label>
);
