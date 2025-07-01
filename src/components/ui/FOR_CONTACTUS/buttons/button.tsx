"use client";

import React from 'react';
import styles from './button.module.css';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, children, ...props }) => (
  <button
    {...props}
    className={`${styles.button} ${className || ''}`}
  >
    {children}
  </button>
);
