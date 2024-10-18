import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Dubai's Premier Moroccan Imports</h1>
          <p className="text-xl mb-8">Bringing the essence of Morocco to the heart of Dubai</p>
          <a href="/products" className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
            Explore Our Products
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Moroccan Spices', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
              { name: 'Handmade Rugs', image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
              { name: 'Argan Oil', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <a href="/products" className="text-blue-600 hover:text-blue-800 flex items-center">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Authentic Products', description: 'Direct imports from Morocco, ensuring authenticity and quality.' },
              { title: 'Wide Selection', description: 'From spices to textiles, we offer a diverse range of Moroccan goods.' },
              { title: 'Expert Knowledge', description: 'Our team has deep expertise in Moroccan culture and products.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{item.title }</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Moroccan Luxury Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-lg mb-8"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">{t('discoverMoroccanLuxury')}</h2>
            <p className="text-xl mb-4">{t('joinMailingList')}</p>
            <form className="flex">
              <input
                type="email"
                placeholder={t('enterEmail')}
                className="flex-grow p-2 rounded-l text-gray-800"
              />
              <button type="submit" className="bg-amber-800 text-white p-2 rounded-r hover:bg-amber-900 transition duration-300">
                {t('subscribeNow')}
              </button>
            </form>
          </div>
          <motion.div
            className="md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Moroccan Luxury"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Ready for Moroccan Excellence Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-lg"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">{t('readyForMoroccanExcellence')}</h2>
            <p className="text-xl mb-8">{t('joinNetwork')}</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/distributor-form"
                className="bg-white text-amber-700 hover:bg-amber-100 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 inline-block"
              >
                {t('becomeDistributor')}
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Successful Distributors"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;