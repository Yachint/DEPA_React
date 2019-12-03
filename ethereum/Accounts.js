import web3 from './web3';
import accountJSON from './build/AccountManager.json';

const instance = new web3.eth.Contract(
    JSON.parse(accountJSON.interface),
    '0xa27C607170251A0AB871127a16a33c38980bB04d'
);

export default instance;