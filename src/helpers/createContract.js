import Eth from './web3';

export default function (config, ...contractArgs) {
  const contract = new Eth.Contract(config.artifacts);
  return contract.deploy({
    data: config.byteCode,
    arguments: contractArgs
  });
}
