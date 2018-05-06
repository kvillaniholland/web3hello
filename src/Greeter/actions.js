import {getAccounts} from '../helpers/web3';
import createContract from '../helpers/createContract';
import greeterConfig from '../contracts/greeterConfig';
import greeterState from '../state/greeter';

export async function fetchGreeting(greetingText) {
  const {startFetching, setGreeting, endFetching} = greeterState;

  startFetching();
  try {
    const accounts = await getAccounts();
    const greeterContract = createContract(greeterConfig, greetingText);
    const contract = await greeterContract.send({
      from: accounts[0],
      gas: 4700000
    });
    const greeting = await contract.methods.greet().call();
    setGreeting(greeting);
  } catch (e) {
    endFetching();
    throw e;
  }
}
