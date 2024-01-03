import { BrowserRouter } from 'react-router-dom';
import MyApp from './AppRoutes';
import Test from './Test';
import makeHeDates from './function/makeHeDates';

function App() {

 
  return (
    <BrowserRouter>
      <MyApp />
      {/* <Test /> */}
    </BrowserRouter >
  );
}

export default App;


