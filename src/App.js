import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "./App.scss"
export const API_KEY="f6a5670f-883f-4a35-bfb9-e14febd77864";
export const BrainFlix_URL="https://project-2-api.herokuapp.com";  
                                                                           
// here create all the route paths
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/videos/:videoId" component={HomePage} />
        <Route path="/upload" component={UploadPage} />
        <Route component={PageNotFound} />{/*route for all paths different from above*/}
      </Switch>
    </BrowserRouter>
  );
}
export default App;
