import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IProduct } from '@/utils/data';
import { useRouter } from 'next/router';
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
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.name}
          className="rounded shadow"
          width={160}
          height={160}
          priority
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
          onClick={addToCartHandler}
        >
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
