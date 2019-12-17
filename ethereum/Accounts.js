import web3 from './web3';
import accountJSON from './build/AccountManager.json';

const instance = new web3.eth.Contract(
    JSON.parse(accountJSON.interface),
    '0x8e1dDe9f1Beb071Ccb686BF95eaA5C67363F1c1f'
);

export default instance;