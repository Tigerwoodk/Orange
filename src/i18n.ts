import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Existing translations
      // ...

      // New translations for products page
      products: 'Products',
      searchProducts: 'Search products',
      priceRange: 'Price Range',
      priceLowToHigh: 'Price: Low to High',
      priceHighToLow: 'Price: High to Low',
      filterByTags: 'Filter by Tags',
      inStock: 'In Stock',
      outOfStock: 'Out of Stock',
      contactUs: 'Contact Us'
    }
  },
  ar: {
    translation: {
      // Existing translations
      // ...

      // New translations for products page
      products: 'المنتجات',
      searchProducts: 'البحث عن المنتجات',
      priceRange: 'نطاق السعر',
      priceLowToHigh: 'السعر: من الأقل إلى الأعلى',
      priceHighToLow: 'السعر: من الأعلى إلى الأقل',
      filterByTags: 'تصفية حسب العلامات',
      inStock: 'متوفر',
      outOfStock: 'غير متوفر',
      contactUs: 'اتصل بنا'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;