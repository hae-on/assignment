import { createBrowserRouter } from 'react-router-dom';

import OrderInfoProvider from 'src/context/OrderInfoContext';

import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <OrderInfoProvider>
        <App />
      </OrderInfoProvider>
    ),
    children: [
      {
        path: '/',
        async lazy() {
          const { HomePage } = await import('../pages/HomePage');
          return { Component: HomePage };
        },
      },
      {
        path: '/order',
        async lazy() {
          const { OrderPage } = await import('../pages/OrderPage');
          return { Component: OrderPage };
        },
      },
      {
        path: '/complete',
        async lazy() {
          const { CompletePage } = await import('../pages/CompletePage');
          return { Component: CompletePage };
        },
      },
      {
        path: '/error',
        async lazy() {
          const { ErrorPage } = await import('../pages/ErrorPage');
          return { Component: ErrorPage };
        },
      },
    ],
  },
]);

export default router;
