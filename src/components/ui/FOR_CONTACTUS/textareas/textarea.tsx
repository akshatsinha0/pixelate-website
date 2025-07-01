"use client";

import React from 'react';
import styles from './textarea.module.css';

export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className, ...props }) => (
  <textarea
    {...props}
    className={`${styles.textarea} ${className || ''}`}
  />
);
