import React, { Component } from "react";
import Description from "./Description";
import Name from "./Name";
import Header from "./Header";
import Designation from "./Designation";
import Button from "./Button";
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Name />
        <br />
        <Designation />
        <Description />
        <Button />
      </div>
    );
  }
}
export default App;
