import React from 'react';
import Link from 'next/link';

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <header>
      <nav className="flex h-12 items-center px-4 justify-between shadow-md">
        <Link href="/" className="text-lg font-bold">
          Loft 35
        </Link>
        <div>
          <Link href="/"></Link>
          <Link href="/">Facebook</Link>
          <Link href="/">Intagram</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
