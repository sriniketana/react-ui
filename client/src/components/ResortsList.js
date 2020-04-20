import React from "react";
import { ClickableTile } from "carbon-components-react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { ThumbsUp24 } from "@carbon/icons-react";

export default class ResortsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.resorts.map((resort) => (
          <ClickableTile style={{ margin: "2rem" }}>
            <Grid fluid>
              <Row center="xs">
                <Col xs={3}>
                  <img alt="" src={resort.image} height="150px" width="150px" />
                </Col>
                <Col xs={9}>
                  <h2>
                    <strong>{resort.name}</strong>
                  </h2>
                  <br />
                  <h4>Price: {resort.cost}</h4>
                  <br />
                  <h4>
                    {resort.likes}
                    <ThumbsUp24 style={{ marginLeft: "1rem" }} />
                  </h4>
                  <br />
                </Col>
              </Row>
            </Grid>
          </ClickableTile>
        ))}
      </React.Fragment>
    );
  }
}
