import React, {Component} from 'react';
import {Well} from 'react-bootstrap';
import {observer} from 'mobx-react';

class Greeting extends Component {
  render() {
    const {greeterState: {greeting}} = this.props;

    return <div style={{'marginTop': '15px'}}>
      {greeting && <Well>{greeting}</Well>}
    </div>
  }
}

export default observer(Greeting);
