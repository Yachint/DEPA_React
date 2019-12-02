import web3 from './web3';
import accountJSON from './build/AccountManager.json';

const instance = new web3.eth.Contract(
    JSON.parse(accountJSON.interface),
    '0x76BA98056ee6d9304D047c3eFc130991bD4d2409'
);

export default instance;