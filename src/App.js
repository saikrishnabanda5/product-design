import './App.css';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import ProductDesign from './containers/ProductDesign/ProductDesign';
import ProductServices from './containers/ProductServices/ProductServices';
import DesignForm from './containers/DesignForm/DesignForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ProductDesign}/>
          <Route exact path="/productservices" component={ProductServices}/>
          <Route exact path="/productdesign-form" component={DesignForm}/>
          <Route> Invalid path</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
