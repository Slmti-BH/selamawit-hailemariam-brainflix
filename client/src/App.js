import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "./App.scss";

// pass in variables from env
export const BrainFlix_URL = process.env.REACT_APP_API_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;


// here create all the route paths
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/videos/:videoId" component={HomePage} />
        <Route path="/upload" component={UploadPage} />
        {/*route for all paths different from above*/}
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
