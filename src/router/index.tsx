import { createBrowserRouter } from 'react-router-dom';

import { PATH } from 'src/constants/path';
import OrderInfoProvider from 'src/context/OrderInfoContext';

import App from './App';

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: (
      <OrderInfoProvider>
        <App />
      </OrderInfoProvider>
    ),
    children: [
      {
        path: PATH.HOME,
        async lazy() {
          const { HomePage } = await import('../pages/HomePage');
          return { Component: HomePage };
        },
      },
      {
        path: PATH.ORDER,
        async lazy() {
          const { OrderPage } = await import('../pages/OrderPage');
          return { Component: OrderPage };
        },
      },
      {
        path: PATH.COMPLETE,
        async lazy() {
          const { CompletePage } = await import('../pages/CompletePage');
          return { Component: CompletePage };
        },
      },
      {
        path: PATH.ERROR,
        async lazy() {
          const { ErrorPage } = await import('../pages/ErrorPage');
          return { Component: ErrorPage };
        },
      },
    ],
  },
]);

export default router;
