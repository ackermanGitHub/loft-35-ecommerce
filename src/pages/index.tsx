import HeaderView from '@/containers/HeaderView';
import Layout from '@/containers/Layout';
import ProductsSroll from '@/containers/ProductsSroll';
import data from '@/utils/data';

export default function Home() {
  return (
    <Layout title="Home Page">
      <HeaderView />
      <ProductsSroll products={data.products} />
    </Layout>
  );
}
