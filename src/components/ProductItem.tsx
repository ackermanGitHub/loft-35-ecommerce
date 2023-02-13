import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IProduct } from '@/utils/data';
import { Store } from '@/context/Store';

interface IProps {
  product: IProduct;
}

const ProductItem: React.FC<IProps> = ({ product }) => {
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
      <Link href={`/product/${product.slug}`}>
        <div className="relative w-full pb-[120%] rounded shadow">
          <Image
            src={product.image.src}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 50vw,
              (max-width: 1024px) 100vw"
          />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p>${product.price}</p>
        <button
          className="primary-button"
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
