"use client";

import React from 'react';
import styles from './input.module.css';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input
    {...props}
    className={`${styles.input} ${className || ''}`}
  />
);
