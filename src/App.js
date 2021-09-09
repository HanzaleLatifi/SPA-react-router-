import {BrowserRouter , Route} from 'react-router-dom' ;
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact={true} component={HomePage}>HOME</Route>
      <Route path='/about-us' component={AboutUsPage}>AboutUS</Route>
    </BrowserRouter>
    
  );
}

export default App;
