import ProductItem from '@/components/ProductItem';

const ProductsSroll = ({ products }: any) => {
  return (
    <div className="flex flex-wrap justify-around max-w-md m-auto">
      {products.map((product: any): React.ReactNode => {
        return <ProductItem product={product} key={product.slug} />;
      })}
    </div>
  );
};

export default ProductsSroll;
