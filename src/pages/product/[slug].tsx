import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import data, { IProduct } from '@/utils/data';
import Layout from '@/containers/Layout';
import { useRouter } from 'next/router';
import { Store } from '@/context/Store';

interface IProps {}

const ProductScreen: React.FC<IProps> = () => {
  const { state, dispatch } = useContext(Store);

  const router = useRouter();

  const { query } = useRouter();
  const { slug } = query;
  const product: IProduct | undefined = data.products.find(
    (x) => x.slug === slug
  );

  if (!product) {
    return <div>Product Not Found</div>;
  }

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
    router.push('/cart');
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back to Products </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-soan-2">
          <Image
            src={product.image.src}
            alt={product.name}
            width={640}
            height={640}
            sizes="responsive"
            priority
          />
        </div>
        <ul>
          <li>
            <h1 className="text-lg">{product.name}</h1>
          </li>
          <li>Category: {product.category}</li>
          <li>Brand: {product.brand} </li>
          <li>
            {' '}
            {product.rating} of {product.numReviews} reviews
          </li>
          <li>Description: {product.description} </li>
        </ul>
      </div>
      <div>
        <div className="block mb-5 rounded-lg shadow-md p-5">
          <div className="mb-2 flex justify-between">
            <div>Price</div>
            <div>${product.price} </div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>Status</div>
            <div> {product.countInStock > 0 ? 'In stock' : 'Unavailable'} </div>
          </div>
          <button
            className="rounded bg-amber-300 py-2 px-4 shadow outline-none hover:bg-amber-400  active:bg-amber-500 w-full"
            onClick={addToCartHandler}
          >
            Add to cart
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductScreen;
