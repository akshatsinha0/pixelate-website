import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/FOR_CONTACTUS/cards/card';
import { Button } from '../ui/FOR_CONTACTUS/buttons/button';
import { Input } from '../ui/FOR_CONTACTUS/inputs/input';
import { Label } from '../ui/FOR_CONTACTUS/labels/label';
import { Textarea } from '../ui/FOR_CONTACTUS/textareas/textarea';
import { Send, Zap } from 'lucide-react';
import styles from './ContactUs.module.css';
import { useContactFormState } from './The_Contact_Form_State';
import type { MotionValue } from 'framer-motion';
import { useAnimation } from 'framer-motion';

interface TheContactFormCardProps {
  controls: ReturnType<typeof useAnimation>;
  buttonSpring: MotionValue<number>;
  buttonScale: MotionValue<number>;
}

const TheContactFormCard: React.FC<TheContactFormCardProps> = ({ controls, buttonSpring, buttonScale }) => {
  const {
    formData,
    isSubmitting,
    status,
    fieldFocus,
    setFieldFocus,
    handleChange,
    handleSubmit
  } = useContactFormState();

  return (
    <Card className={styles.infoCard}>
      <CardHeader className={styles.infoCardHeader}>
        <CardTitle>Send Us a Message</CardTitle>
        <div className={styles.infoCardSubtitle}>
          Let&apos;s create something extraordinary together. Every great journey begins with a single message.
        </div>
      </CardHeader>
      <CardContent className={styles.infoCardContent}>
        <motion.form
          onSubmit={e => handleSubmit(e)}
          className={styles.form}
          animate={controls}
          role="form"
          aria-labelledby="contact-form-title"
        >
          <div className={styles.formGrid}>
            <motion.div className={styles.formGroup} whileFocus={{ scale: 1.02 }}>
              <Label htmlFor="name" className={styles.formLabel}>Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your amazing name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFieldFocus('name')}
                onBlur={() => setFieldFocus(null)}
                required
                className={styles.formInput}
                aria-required="true"
              />
              {fieldFocus === 'name' && (
                <motion.div className={styles.fieldGlow} layoutId="field-glow" />
              )}
            </motion.div>
            <motion.div className={styles.formGroup} whileFocus={{ scale: 1.02 }}>
              <Label htmlFor="email" className={styles.formLabel}>Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@gmail.com"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFieldFocus('email')}
                onBlur={() => setFieldFocus(null)}
                required
                className={styles.formInput}
                aria-required="true"
              />
              {fieldFocus === 'email' && (
                <motion.div className={styles.fieldGlow} layoutId="field-glow" />
              )}
            </motion.div>
          </div>
          <div className={styles.formGrid}>
            <motion.div className={styles.formGroup} whileFocus={{ scale: 1.02 }}>
              <Label htmlFor="phone" className={styles.formLabel}>Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 888 888 8888"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFieldFocus('phone')}
                onBlur={() => setFieldFocus(null)}
                className={styles.formInput}
                aria-required="false"
              />
              {fieldFocus === 'phone' && (
                <motion.div className={styles.fieldGlow} layoutId="field-glow" />
              )}
            </motion.div>
            <motion.div className={styles.formGroup} whileFocus={{ scale: 1.02 }}>
              <Label htmlFor="subject" className={styles.formLabel}>Subject *</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="The next big thing"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFieldFocus('subject')}
                onBlur={() => setFieldFocus(null)}
                required
                className={styles.formInput}
                aria-required="true"
              />
              {fieldFocus === 'subject' && (
                <motion.div className={styles.fieldGlow} layoutId="field-glow" />
              )}
            </motion.div>
          </div>
          <motion.div className={styles.formGroup} whileFocus={{ scale: 1.02 }}>
            <Label htmlFor="message" className={styles.formLabel}>Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your wildest dreams and how we can make them reality..."
              rows={6}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFieldFocus('message')}
              onBlur={() => setFieldFocus(null)}
              required
              className={styles.formInput}
              aria-required="true"
            />
            {fieldFocus === 'message' && (
              <motion.div className={styles.fieldGlow} layoutId="field-glow" />
            )}
          </motion.div>
          <motion.div className={styles.formButtonGroup}>
            <motion.div style={{ scale: buttonSpring }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className={styles.formButton}
                onMouseDown={() => buttonScale.set(0.95)}
                onMouseUp={() => buttonScale.set(1)}
                onMouseLeave={() => buttonScale.set(1)}
              >
                <span className={styles.buttonContent}>
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className={styles.spinner}
                      />
                    </>
                  ) : (
                    <>
                      <Send className={styles.buttonIcon} />
                      <span>Launch Message</span>
                    </>
                  )}
                </span>
              </Button>
            </motion.div>
          </motion.div>
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                className={styles.successMessage}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className={styles.checkmark}
                >
                  <Send className={styles.successIcon} />
                </motion.div>
                <div className={styles.successText}>Message Launched Successfully! 🚀</div>
                <p className={styles.successSubtext}>We&apos;ll respond within 24 hours!</p>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                className={styles.errorMessage}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className={styles.errorIcon}
                >
                  <Zap className={styles.errorIcon} />
                </motion.div>
                <div className={styles.errorText}>Transmission Failed! ⚡</div>
                <p className={styles.errorSubtext}>Please try again!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </CardContent>
    </Card>
  );
};

export default TheContactFormCard; 