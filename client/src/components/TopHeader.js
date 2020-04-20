import React, { Component } from "react";
import { Header } from "carbon-components-react";

export default class TopHeader extends Component {
  render() {
    return (
      <Header
        aria-label=""
        style={{ justifyContent: "center", height: "4rem" }}
      >
        <h2 style={{ margin: "1rem", color: "aliceblue" }}>Mod Resorts</h2>
      </Header>
    );
  }
}
