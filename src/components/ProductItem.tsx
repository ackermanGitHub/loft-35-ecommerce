import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IProduct } from '@/utils/data';

interface IProps {
  product: IProduct;
}

const ProductItem: React.FC<IProps> = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.name}
          className="rounded shadow"
          width={160}
          height={160}
        />
      </Link>
      <div className="flex flex-col items-center justify-center m-auto">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p>{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button h-9 w-20 text-center text-xs"
          type="button"
        >
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
