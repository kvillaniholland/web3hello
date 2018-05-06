import Web3 from 'web3';

if (!window.web3Wrapper) {
  const web3 = new Web3(window.web3.currentProvider);
  window.web3Wrapper = web3;
}
export default window.web3Wrapper.eth;

export async function getAccounts() {
  return await window.web3Wrapper.eth.getAccounts((empty, accounts) => accounts);
}
