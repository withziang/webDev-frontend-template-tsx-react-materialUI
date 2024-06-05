import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routes from './routes/routeList'

function App() {
  return (<>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </>
  );
}

export default App;
