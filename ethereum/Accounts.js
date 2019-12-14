import web3 from './web3';
import accountJSON from './build/AccountManager.json';

const instance = new web3.eth.Contract(
    JSON.parse(accountJSON.interface),
    '0x5a5f4B06c1422B270c86726661118AE96446FE2f'
);

export default instance;