import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/FOR_CONTACTUS/cards/card';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import styles from './ContactUs.module.css';

interface TheContactInfoCardProps {
  isHovering: string | null;
  setIsHovering: (label: string | null) => void;
}

const TheContactInfoCard: React.FC<TheContactInfoCardProps> = ({ isHovering, setIsHovering }) => (
  <Card className={styles.infoCard}>
    <CardHeader className={styles.infoCardHeader}>
      <CardTitle>
        <div className={styles.infoCardTitle}>Get in Touch</div>
      </CardTitle>
      <div className={styles.infoCardSubtitle}>
        Let&apos;s create something extraordinary together.<br className={styles.breakDesktop} /> Every great journey begins with a single message.
      </div>
    </CardHeader>
    <CardContent className={styles.infoCardContent}>
      {[
        { Icon: Mail, label: 'Email Us', value: 'pixelatevit@gmail.com', color: '#FF6B6B', bg: styles.iconBg1 },
        { Icon: Phone, label: 'Call Us', value: '+91 888 888 8888', color: '#4ECDC4', bg: styles.iconBg2 },
        { Icon: MapPin, label: 'Visit Us', value: 'VIT Vellore', color: '#45B7D1', bg: styles.iconBg3 }
      ].map((item, idx) => (
        <motion.div
          key={idx}
          className={styles.contactItem}
          whileHover={{ scale: 1.08, x: 16, transition: { type: 'spring', stiffness: 400 } }}
          onMouseEnter={() => setIsHovering(item.label)}
          onMouseLeave={() => setIsHovering(null)}
        >
          <motion.div
            className={`${styles.contactIconWrapper} ${item.bg}`}
            animate={isHovering === item.label ? { scale: 1.22, boxShadow: `0 0 40px 12px ${item.color}55` } : {}}
            transition={{ duration: 0.4 }}
          >
            <item.Icon className={styles.contactIcon} style={{ color: item.color }} />
          </motion.div>
          <div className={styles.contactTextBlock}>
            <div className={styles.contactLabel}>{item.label}</div>
            <div className={styles.contactValue}>{item.value}</div>
          </div>
        </motion.div>
      ))}
      <div className={styles.socialLinksRow}>
        {[MessageCircle, Mail].map((Icon, i) => (
          <motion.div
            key={i}
            className={styles.socialButton}
            whileHover={{ scale: 1.22, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className={styles.socialIcon} />
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default TheContactInfoCard; 