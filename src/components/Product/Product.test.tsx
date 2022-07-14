import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { IProduct, Product } from '.';

describe('Simple working test', () => {
  it('the title of product is visible', () => {
    const product: IProduct = {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    };

    render(<Product product={product} />);
    expect(screen.getByText(product.name)).toBeInTheDocument();
  });
});
