import React, { useEffect, useState } from 'react';
import ProductItem from '@/components/ProductItem';
import { IProduct } from '@/utils/data';
import ProductDetail from '@/components/ProductDetail';

const ProductsSroll: React.FC<{ products: IProduct[] }> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? 'hidden' : 'unset';
  }, [selectedProduct]);

  return (
    <div className="flex flex-wrap justify-around max-w-screen-md m-auto">
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          closeProductDetail={() => setSelectedProduct(null)}
        />
      )}
      {products.map((product: IProduct) => {
        return (
          <ProductItem
            onClick={setSelectedProduct}
            product={product}
            key={product.slug}
          />
        );
      })}
    </div>
  );
};

export default ProductsSroll;
