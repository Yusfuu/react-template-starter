import { IProduct } from '@/components/Product';
import { useState } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Basic Tee 6-Pack',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Artwork Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
      price: '$35',
      color: 'Iso Dots',
      imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
      price: '$35',
      color: 'Charcoal',
      imageAlt: "Front of men's Basic Tee in dark gray.",
    },
  ]);

  return { products, setProducts };
};
