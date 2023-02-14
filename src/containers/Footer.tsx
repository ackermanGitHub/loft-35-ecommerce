import React from 'react';

interface IProps {}

const Footer: React.FC<IProps> = () => {
  return (
    <footer className="flex h-10 justify-center items-center shadow-inner">
      <p>Copyright © 2023 Loft-35</p>
    </footer>
  );
};

export default Footer;
