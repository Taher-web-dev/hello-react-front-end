import Greeting from './Components/Greeting/greeting';
import { Provider } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from react-router-dom;
import store from './Redux/configureStore';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' exact element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
