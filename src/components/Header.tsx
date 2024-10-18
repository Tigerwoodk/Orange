import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-amber-600 text-white p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Qasr Zouina</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-amber-200">{t('home')}</Link></li>
            <li><Link to="/products" className="hover:text-amber-200">{t('products')}</Link></li>
            <li><Link to="/about" className="hover:text-amber-200">{t('about')}</Link></li>
            <li><Link to="/distributor-form" className="hover:text-amber-200">{t('becomeDistributor')}</Link></li>
          </ul>
        </nav>
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}
          className="bg-amber-700 text-white p-2 rounded"
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </motion.header>
  );
};

export default Header;