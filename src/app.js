import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import { NavBar, Footer, Loading, Content } from "./components";
import { Home, Features, Search, Profile, ExternalApi, About } from "./views";
import { useAuth0} from "@auth0/auth0-react";
import "./app.css";

//import SocialFollow from "./SocialFollow";


const App = () => {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <Loading />
    
  }


  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" component={Content} />
          <Route path="/Search" component={Search} />
          <Route path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
          <Route path="/about-us" component={About} />
        </Switch>
      </Container>
      <Footer />
      
    </div>
    
  );
};

export default App;


//<Route path="/profile" component={Profile} />