import Layout from '@/containers/Layout';
import ProductsSroll from '@/containers/ProductsSroll';
import Product from '@/models/ProductModel';
import db from '@/utils/db';

export default function Home({ products }: any) {
  return (
    <Layout title="Home Page">
      <ProductsSroll products={products} />
    </Layout>
  );
}

export async function getServerSideProps() {
  let products;
  try {
    await db.connect();
    products = await Product.find().lean();
  } catch (error) {
    console.error(error);
    throw new Error('An error occured while fetching the products');
  } finally {
    await db.disconnect();
  }
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
