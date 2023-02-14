import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IProduct } from '@/utils/data';
import { Store } from '@/context/Store';

interface IProps {
  product: IProduct;
  onClick: Function;
}

const ProductItem: React.FC<IProps> = ({ product, onClick }) => {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem?.quantity ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock');
      return;
    }

    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity: quantity },
    });
  };

  return (
    <div className="card w-2/5">
      <div
        onClick={() => {
          onClick(product);
        }}
        className="relative overflow-hidden w-full pb-[100%] rounded-t-lg"
      >
        <Image
          src={product.image.src}
          alt={product.image.name}
          fill
          priority
          sizes="(max-width: 425px) 50vw,
              (max-width: 768px) 75vw,
              (max-width: 1024px) 100vw"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-5">
        <h2 className="text-lg">{product.name}</h2>
        <p>${product.price}</p>
        <button
          className="primary-button text-xs"
          type="button"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
