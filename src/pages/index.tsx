import ProductItem from '@/components/ProductItem';
import Layout from '@/containers/Layout';
import data from '@/utils/data';

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="flex flex-wrap justify-around max-w-2xl m-auto">
        {data.products.map((product): React.ReactNode => {
          return <ProductItem product={product} key={product.slug} />;
        })}
      </div>
    </Layout>
  );
}
