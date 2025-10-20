import type { Product } from "../types/ProductType";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className='bg-white rounded-lg shadow p-4 flex flex-col'>
      <img
        src={product.image}
        alt={product.name}
        className='h-40 object-cover rounded mb-4'
      />
      <h2 className='text-xl font-semibold'>{product.name}</h2>
      <p className='text-gray-500 text-sm mb-2'>{product.description}</p>
      <p className='font-bold text-lg'>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
