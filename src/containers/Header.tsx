import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '@/context/Store';

interface IProps {}

const Header: React.FC<IProps> = () => {
  const { state } = useContext(Store);
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(
      cart.cartItems.reduce((a, c) => a + (c.quantity || 0), 0)
    );
  }, [cart.cartItems]);

  return (
    <header>
      <nav className="flex h-12 items-center px-4 justify-between shadow-md mt-2">
        <Link href="/">
          <Image
            src="/icons/Loft-35-Beauty-shadow.png"
            alt="Carrito de Compras"
            className={'Loft-35-Beauty w-auto'}
            width={35}
            height={35}
            priority
          />
        </Link>
        <div className="flex h-8 items-center">
          <Link href="/login" className="mx-2">
            <h1 className="">Login</h1>
          </Link>
          <Link href="/" className="mx-2">
            <Image
              src="/icons/instagram.svg"
              alt="Dirección del Instagram"
              className={'Instagram'}
              width={18}
              height={18}
              priority
            />
          </Link>
          <Link href="/" className="mx-2">
            <Image
              src="/icons/facebook.svg"
              alt="Dirección del Facebook"
              className={'Facebook'}
              width={18}
              height={18}
              priority
            />
          </Link>
          <Link href="/cart" className="mx-2 relative">
            <Image
              src="/icons/cart.svg"
              alt="Carrito de Compras"
              className={'shopping-cart'}
              width={18}
              height={18}
              priority
            />
            {cartItemsCount > 0 && (
              <span className="cart-span absolute top-3 left-2 text-center rounded-full bg-red-600 text-white w-3 h-3">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
