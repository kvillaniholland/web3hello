import React, {Component} from 'react';
import {Button, Form, FormControl} from 'react-bootstrap';
import {observer} from 'mobx-react';
import {fetchGreeting} from './actions';

class GreetingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: ''
    };
  }

  handleChange = (e) => {
    this.setState({greeting: e.target.value});
  }

  submit = () => {
    const {greeting} = this.state;
    fetchGreeting(greeting);
    this.setState({greeting: ''});
  }

  render() {
    const {greeterState: {fetching}} = this.props;
    const {greeting} = this.state;

    return <Form inline>
        <FormControl
          value={greeting}
          placeholder="Enter greeting"
          label="Greeting"
          onChange={this.handleChange}
        />{' '}
        <Button
          disabled={!!fetching}
          bsStyle="primary"
          onClick={this.submit}
        >
          {fetching && 'Loading...'}
          {!fetching && 'Say Hi'}
        </Button>
      </Form>
  }
}

export default observer(GreetingForm);
