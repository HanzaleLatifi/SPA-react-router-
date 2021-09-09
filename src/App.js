import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
function App() {
  return (
    <BrowserRouter>

      <Layout>
        <Route path="/" exact={true} component={HomePage}  />
        <Route path="/about-us" component={AboutUsPage}  />
        <Route path="/profile" component={ProfilePage}  />
        
      </Layout>

    </BrowserRouter>

  );
}

export default App;
