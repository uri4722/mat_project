import { BrowserRouter } from 'react-router-dom';
import MyApp from './AppRoutes';
import Test from './Test';

function App() {
  return (
    <BrowserRouter>
      {/* <MyApp /> */}
      <Test />
    </BrowserRouter >
  );
}

export default App;


