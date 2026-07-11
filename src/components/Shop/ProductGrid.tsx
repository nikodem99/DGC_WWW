import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

export default function ProductGrid({ products, columns = 3 }: ProductGridProps) {
  return (
    <div className="products columns_wrap">
      {products.map((product) => (
        <div key={product.id} className={`column-1_${columns}`}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
