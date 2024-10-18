import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Product } from '../api/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img src={product.photo} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-amber-600 font-bold">${product.price.toFixed(2)}</span>
          <span className={`px-2 py-1 rounded-full text-sm ${
            product.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {product.available ? t('inStock') : t('outOfStock')}
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {product.tag.map(tag => (
            <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;