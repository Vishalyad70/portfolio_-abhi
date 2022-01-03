import Landingpage from "./Components/Landingpage";
import {Contact} from "./Components/Contact";
import { Header } from "./Components/Landingpage/Header";
import { Footer } from './Components/Landingpage/Footer';
import {Work} from "./Components/Work";
import {  Route, Switch } from "react-router-dom";
import { Errorpage} from "./Components/Errorpage"
import Login from "./Components/Login";

function App() {
  return (


    <div className="App">
      <div>
      <Header/>
      <Switch >
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/Work" component={Work} />
        <Route exact path="/Contact" component={Contact}  />
        <Route exact path="*" component={ Errorpage}/>
      </Switch>
      <Footer/>
      </div>
    <div>

    </div>
    </div>
  );
}

export default App;
