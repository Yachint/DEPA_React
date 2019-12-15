import web3 from './web3';
import accountJSON from './build/AccountManager.json';

const instance = new web3.eth.Contract(
    JSON.parse(accountJSON.interface),
    '0x541Fd6133465220C36017D933f8bC3E8Ef0F00Ab'
);

export default instance;