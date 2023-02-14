import Image from 'next/image';
import React from 'react';
import loft35_sign from '/public/icons/Loft35-sign.png';

interface IProps {}

const HeaderView: React.FC<IProps> = () => {
  return (
    <header className="flex h-72 w-[100vw] justify-center items-center shadow-white overflow-auto bg-black mb-10">
      <Image
        src={loft35_sign}
        width={100}
        height={220}
        alt="loft35_sign"
      ></Image>
    </header>
  );
};

export default HeaderView;
