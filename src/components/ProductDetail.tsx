import Image from 'next/image';
import { IProduct } from '@/utils/data';
import React from 'react';

interface IProps {
  product: IProduct;
  closeProductDetail: Function;
}

const ProductDetail: React.FC<IProps> = ({ product, closeProductDetail }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 z-10">
      <div className="relative mx-auto my-32 w-11/12 lg:w-1/2 bg-slate-600 rounded-lg overflow-auto">
        <Image
          src={product.image.src}
          alt={product.image.name}
          height={250}
          width={250}
        />
        <h1 className="font-medium text-lg mb-4">{product.name}</h1>
        <p>{product.description}</p>
        <button
          onClick={() => closeProductDetail()}
          className="absolute top-0 right-0 p-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
