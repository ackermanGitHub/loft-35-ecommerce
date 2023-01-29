import ProductItem from '@/components/ProductItem';
import Layout from '@/containers/Layout';
import data from '@/utils/data';

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product): React.ReactNode => {
          return <ProductItem product={product} key={product.slug} />;
        })}
      </div>
    </Layout>
  );
}
