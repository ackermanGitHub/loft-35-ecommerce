import Image from 'next/image';
import { IProduct } from '@/utils/data';

interface IProps {
  product: IProduct;
  onClick: Function;
}

const ProductDetail: React.FC<IProps> = ({ product, onClick }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 z-10">
      <div className="relative mx-auto my-32 w-11/12 lg:w-1/2">
        <Image
          src={product.image.src}
          alt={product.image.name}
          height={250}
          width={250}
        />
        <h1 className="font-medium text-lg mb-4">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
        <button
          onClick={() => onClick(null)}
          className="absolute top-0 right-0 p-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
