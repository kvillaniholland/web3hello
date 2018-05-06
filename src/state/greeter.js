import {observable} from 'mobx';

const state = observable({
  fetching: false,
  greeting: null,
  startFetching: () => {
    state.fetching = true;
  },
  endFetching: () => {
    state.fetching = false;
  },
  setGreeting: (greeting) => {
    state.fetching = false;
    state.greeting = greeting;
  }
});

export default state;
