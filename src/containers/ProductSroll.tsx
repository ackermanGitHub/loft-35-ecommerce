import ProductItem from '@/components/ProductItem';
import data from '@/utils/data';

const ProductSroll = () => {
  return (
    <div className="flex flex-wrap justify-around max-w-md m-auto">
      {data.products.map((product): React.ReactNode => {
        return <ProductItem product={product} key={product.slug} />;
      })}
    </div>
  );
};

export default ProductSroll;
