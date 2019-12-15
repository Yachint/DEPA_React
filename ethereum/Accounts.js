import web3 from './web3';
import accountJSON from './build/AccountManager.json';

const instance = new web3.eth.Contract(
    JSON.parse(accountJSON.interface),
    '0x2389fA6c8937B238C9df668695214461CF3031c2'
);

export default instance;