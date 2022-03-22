import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Greeting from './Components/Greeting/greeting';
import store from './Redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
