import web3 from './web3';
import accountJSON from './build/AccountManager.json';

const instance = new web3.eth.Contract(
    JSON.parse(accountJSON.interface),
    '0x8475Be4aE59D3C2d5828dd6F1e259A7619684f27'
);

export default instance;