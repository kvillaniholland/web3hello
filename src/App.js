import React, {Component} from 'react';
import {Grid, Col, Row, PageHeader} from 'react-bootstrap';
import Greeter from './Greeter';
import greeterState from './state/greeter';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <PageHeader className="App-title">Web3 Test</PageHeader>
            <Greeter.GreetingForm greeterState={greeterState} />
            <Greeter.Greeting greeterState={greeterState} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
