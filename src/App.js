import {BrowserRouter , Route} from 'react-router-dom' ;
import Navigation from './components/Navigation';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Route path="/" exact={true} component={HomePage} HOME  />
      <Route path="/about-us" component={AboutUsPage} AboutUS />
    </BrowserRouter>
    
  );
}

export default App;
