import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Tag, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { fetchProducts, Product } from '../api/products';
import ExampleForm from '../components/ExampleForm';
import FloatingTooltip from '../components/FloatingTooltip';
import AnimatedSection from '../components/AnimatedSection';
import AutocompleteSearch from '../components/AutocompleteSearch';

const Products: React.FC = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (selectedTags.length === 0 || selectedTags.some((tag) => product.tag.includes(tag)))
    );

    filtered.sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );

    setFilteredProducts(filtered);
  }, [products, priceRange, sortOrder, selectedTags]);

  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setPriceRange([0, value]);
  };

  const handleSortChange = (newOrder: 'asc' | 'desc') => {
    setSortOrder(newOrder);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6 text-amber-800">{t('products')}</h1>

      <AnimatedSection>
        <h2 className="text-2xl font-semibold mb-4">{t('searchProducts')}</h2>
        <AutocompleteSearch />
      </AnimatedSection>

      <AnimatedSection>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('priceRange')}</h2>
          <div className="flex items-center">
            <input
              type="range"
              min={0}
              max={1000}
              value={priceRange[1]}
              onChange={handlePriceRangeChange}
              className="w-full"
            />
            <span className="ml-2">${priceRange[1]}</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('filterByTags')}</h2>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(products.flatMap((p) => p.tag))).map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 rounded-full ${
                  selectedTags.includes(tag)
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                <Tag className="inline-block mr-1" size={16} />
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <button
            onClick={() => handleSortChange(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition duration-300"
          >
            {sortOrder === 'asc' ? t('priceLowToHigh') : t('priceHighToLow')}
          </button>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <FloatingTooltip key={product.id} content={`${product.stock} in stock`}>
              <ProductCard product={product} />
            </FloatingTooltip>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-semibold mb-4">{t('contactUs')}</h2>
        <ExampleForm />
      </AnimatedSection>
    </motion.div>
  );
};

export default Products;