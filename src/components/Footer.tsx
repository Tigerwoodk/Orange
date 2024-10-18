import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-amber-800 text-white p-4 mt-8"
    >
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Qasr Zouina. {t('allRightsReserved')}</p>
      </div>
    </motion.footer>
  );
};

export default Footer;