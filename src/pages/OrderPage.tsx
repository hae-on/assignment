import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { fetchOrderProducts } from 'src/apis/orderProducts';
import Header from 'src/components/Common/Header';
import OrderInfoBox from 'src/components/Order/OrderInfoBox';
import ProductList from 'src/components/Order/ProductList';
import type { Product } from 'src/types/product';

export const OrderPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetchOrderProducts();
      setProducts(data);
    };

    fetchProduct();
  }, []);

  return (
    <>
      <Header />
      <OrderPageContainer>
        <ProductList products={products} />
      </OrderPageContainer>
      <OrderInfoBox />
    </>
  );
};

export default OrderPage;

const OrderPageContainer = styled.section`
  margin: 30px 0 270px 0;
  padding: 25px;
`;
