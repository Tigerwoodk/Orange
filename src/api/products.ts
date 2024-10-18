import { Product } from '../types/product';

// Mock data for products
const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Moroccan Spice Mix',
    price: 12.99,
    description: 'A blend of authentic Moroccan spices',
    tag: ['spices', 'cooking'],
    photo: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    available: true,
    stock: 50
  },
  {
    id: 2,
    title: 'Handwoven Moroccan Rug',
    price: 299.99,
    description: 'Beautiful handcrafted rug from Morocco',
    tag: ['home decor', 'textiles'],
    photo: 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    available: true,
    stock: 10
  },
  {
    id: 3,
    title: 'Argan Oil',
    price: 24.99,
    description: 'Pure Moroccan Argan oil for skin and hair',
    tag: ['beauty', 'skincare'],
    photo: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    available: true,
    stock: 30
  },
  // Add more mock products as needed
];

export const fetchProducts = async (): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockProducts;
};

export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  const newProduct = { ...product, id: mockProducts.length + 1 };
  mockProducts.push(newProduct);
  return newProduct;
};

export const updateProduct = async (id: number, product: Partial<Product>): Promise<Product> => {
  const index = mockProducts.findIndex(p => p.id === id);
  if (index === -1) {
    throw new Error('Product not found');
  }
  mockProducts[index] = { ...mockProducts[index], ...product };
  return mockProducts[index];
};

export const deleteProduct = async (id: number): Promise<void> => {
  const index = mockProducts.findIndex(p => p.id === id);
  if (index === -1) {
    throw new Error('Product not found');
  }
  mockProducts.splice(index, 1);
};