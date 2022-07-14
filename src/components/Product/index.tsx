import { FC, ReactNode } from 'react';

export interface IProduct {
  id: number;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  color: string;
}

type ProductProps = {
  children?: ReactNode;
  product: IProduct;
};

export const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div className="group relative">
      <button className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 shadow-sm ring-1 ring-slate-700/10 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </button>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
};
