import { Outlet } from 'react-router-dom';

import DefaultLayout from 'src/layout/DefaultLayout';

function App() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}

export default App;
