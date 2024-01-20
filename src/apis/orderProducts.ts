import type { Product } from 'src/types/product';

export const fetchOrderProducts = async () => {
  const response = await fetch('http://localhost:3001/items');
  const data: Product[] = await response.json();
  return data;
};
