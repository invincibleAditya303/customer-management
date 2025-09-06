import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import CustomerList from './components/CustomersList';
import CustomerDetails from './components/CustomerDetails';
import CustomerAddresses from './components/CustomerAddresses';
import CustomerForm from './components/CustomerForm';
import AddressForm from './components/AddressForm';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/customers' component={CustomerList} />
      <Route exact path='/customers/add' component={CustomerForm} />
      <Route exact path='/customers/:id/addresses/add' component={AddressForm} />
      <Route exact path='/customers/:id/addresses' component={CustomerAddresses} />
      <Route exact path='/customers/:id' component={CustomerDetails} />
      <Route exact path='/addresses/:addressId/add' component={AddressForm} />
    </Switch>
  </BrowserRouter>
)

export default App;
