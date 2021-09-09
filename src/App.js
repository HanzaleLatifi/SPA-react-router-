import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import routes from './routes';
function App() {
  return (
    <BrowserRouter>

      <Layout>
        {routes.map(route=>{
          return  <Route {...route}  />
        })}
      </Layout>

    </BrowserRouter>

  );
}

export default App;
