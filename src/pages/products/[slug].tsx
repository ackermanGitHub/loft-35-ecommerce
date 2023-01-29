import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IProduct } from '@/utils/data';
import Layout from '@/containers/Layout';
import { useRouter } from 'next/router';

interface IProps {
  product: IProduct;
}

const ProductScreen: React.FC<IProps> = ({ product }) => {
  const { query } = useRouter();
  return <Layout title={product.name}></Layout>;
};

export default ProductScreen;
