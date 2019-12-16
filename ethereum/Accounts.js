import web3 from './web3';
import accountJSON from './build/AccountManager.json';

const instance = new web3.eth.Contract(
    JSON.parse(accountJSON.interface),
    '0x6286f2D5200916361e4E82d148831a03d808F719'
);

export default instance;