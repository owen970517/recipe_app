import Category from "./components/Category";
import Search from "./components/Search";
import Page from "./pages/Page";
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Category/>
        <Page/>
      </BrowserRouter>
    </div>
  );
}

export default App;
