import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { fetchOrderProducts } from 'src/apis/orderProducts';
import Header from 'src/components/Common/Header';
import OrderInfoBox from 'src/components/Order/OrderInfoBox';
import ProductList from 'src/components/Order/ProductList';
import type { Product } from 'src/types/product';

export const OrderPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const fetchProduct = async () => {
      const data = await fetchOrderProducts();
      setProducts(data);
      setIsLoading(false);
    };

    fetchProduct();
  }, []);

  return (
    <>
      <Header />
      <OrderPageContainer>
        {isLoading ? (
          <LoadingMessageWrapper>
            <LoadingMessage>
              목록을 <br />
              불러오고 있습니다.
            </LoadingMessage>
          </LoadingMessageWrapper>
        ) : (
          <ProductList products={products} />
        )}
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

const LoadingMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
`;

const LoadingMessage = styled.p`
  text-align: center;
`;
