import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import axios from "axios";

import ProductList from "./components/ProductList";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  rating: number;
  image: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold mb-6'>Product Catalog</h1>
      {loading && (
        <div className='flex justify-center items-center h-screen'>
          <FadeLoader />
        </div>
      )}

      {error && <div className='error'>{error.message}</div>}

      {!loading && !error && <ProductList products={products} />}
    </div>
  );
};

export default App;
