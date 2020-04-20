import React, { Component } from "react";
import {
  Button,
  Loading,
  DatePicker,
  DatePickerInput,
} from "carbon-components-react";
import "./index.scss";
import TopHeader from "./components/TopHeader";
import { Grid, Row, Col } from "react-flexbox-grid";
import ResortsList from "./components/ResortsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      resorts: [],
      showLoader: false,
    };
    this.fetchResorts = this.fetchResorts.bind(this);
  }

  fetchResorts() {
    const self = this;
    this.setState({ showLoader: true });
    fetch("/resorts")
      .then((res) => {
        return res.json();
      })
      .then(function (data) {
        self.setState({ resorts: data, showLoader: false });
      })
      .catch((err) => {
        self.setState({ showLoader: false });
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <TopHeader />
        <Loading small active={this.state.showLoader} />
        <Grid
          fluid
          style={{
            paddingTop: "4rem",
          }}
        >
          <Col style={{ marginTop: "1rem" }}>
            <DatePicker
              dateFormat="m/d/Y"
              datePickerType="range"
              id="date-picker"
              light={true}
              locale="en"
              short={true}
            >
              <DatePickerInput
                className="some-class"
                disabled={false}
                iconDescription="Icon description"
                id="date-picker-input-id-start"
                invalid={false}
                invalidText="A valid value is required"
                labelText="Start Date"
                onChange={function noRefCheck() {}}
                onClick={function noRefCheck() {}}
                pattern="d{1,2}/d{4}"
                placeholder="mm/dd/yyyy"
                type="text"
              />
              <DatePickerInput
                className="some-class"
                disabled={false}
                iconDescription="Icon description"
                id="date-picker-input-id-end"
                invalid={false}
                invalidText="A valid value is required"
                labelText="End Date"
                onChange={function noRefCheck() {}}
                onClick={function noRefCheck() {}}
                pattern="d{1,2}/d{4}"
                placeholder="mm/dd/yyyy"
                type="text"
              />
            </DatePicker>

            <Button
              onClick={this.fetchResorts}
              style={{ marginTop: "1rem" }}
              kind="primary"
              size="small"
            >
              Search
            </Button>
          </Col>
          <Row center="xs">
            <Col xs={12}>
              <ResortsList resorts={this.state.resorts} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
