import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '@/context/Store';

interface IProps {}

const Header: React.FC<IProps> = () => {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <header>
      <nav className="flex h-12 items-center px-4 justify-between shadow-md mt-2">
        <Link href="/">
          <Image
            src="/icons/Loft-35-Beauty.png"
            alt="Carrito de Compras"
            className={'Loft-35-Beauty w-auto'}
            width={36}
            height={36}
            priority
          />
        </Link>
        <div className="flex h-8 items-center">
          <Link href="/" className="mx-2">
            <Image
              src="/icons/cart.svg"
              alt="Carrito de Compras"
              className={'shopping-cart'}
              width={24}
              height={24}
              priority
            />
            {cart.cartItems.length > 0 && (
              <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                {cart.cartItems.reduce((a, c) => a + (c.quantity || 0), 0)}
              </span>
            )}
          </Link>
          <Link href="/" className="mx-2">
            <Image
              src="/icons/facebook.svg"
              alt="Dirección del Facebook"
              className={'Facebook'}
              width={24}
              height={24}
              priority
            />
          </Link>
          <Link href="/" className="mx-2">
            <Image
              src="/icons/instagram.svg"
              alt="Dirección del Instagram"
              className={'Instagram'}
              width={24}
              height={24}
              priority
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
