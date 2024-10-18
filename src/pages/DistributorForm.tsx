import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const DistributorForm = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6 text-amber-800">{t('becomeDistributor')}</h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">{t('name')}</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">{t('email')}</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 font-bold mb-2">{t('company')}</label>
          <input type="text" id="company" name="company" className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">{t('message')}</label>
          <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-lg" required></textarea>
        </div>
        <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition duration-300">
          {t('submit')}
        </button>
      </form>
    </motion.div>
  );
};

export default DistributorForm;