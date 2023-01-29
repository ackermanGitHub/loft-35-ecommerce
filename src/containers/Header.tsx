import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {}

const Header: React.FC<IProps> = () => {
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
