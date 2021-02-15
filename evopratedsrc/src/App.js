import React, { useState } from "react";
import Search from "./Components/Search";
import Result from "./Components/Result";
import NotFound from "./Components/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [playTime, setPlayTime] = useState("");

  function passPlayTime(formData) {
    setPlayTime(formData);
  }

  React.useEffect(() => {
    const data = localStorage.getItem("playtime");
    if (data) {
      setPlayTime(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("playtime", JSON.stringify(playTime));
  });

  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Search {...props} setPlayTime={passPlayTime} />}
          />
          <Route
            path="/Result"
            render={(props) => <Result {...props} totalTime={playTime} />}
          />
          <Route path="/NotFound" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
