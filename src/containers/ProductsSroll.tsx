import ProductItem from '@/components/ProductItem';
import { IProduct } from '@/utils/data';

const ProductsSroll = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="flex flex-wrap justify-around max-w-screen-md m-auto">
      {products.map((product: IProduct): React.ReactNode => {
        return <ProductItem product={product} key={product.slug} />;
      })}
    </div>
  );
};

export default ProductsSroll;
