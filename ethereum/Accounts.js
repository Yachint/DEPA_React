import web3 from './web3';
import accountJSON from './build/AccountManager.json';

const instance = new web3.eth.Contract(
    JSON.parse(accountJSON.interface),
    '0xC398656aaB1c457B5E59Aaeb061CeD6Af366E985'
);

export default instance;