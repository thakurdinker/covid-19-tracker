import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/HelpStyles";

class Help extends Component {
  render() {
    return (
      <div>
        <h1>Help Page</h1>
      </div>
    );
  }
}

export default withStyles(styles)(Help);
