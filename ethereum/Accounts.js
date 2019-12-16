import web3 from './web3';
import accountJSON from './build/AccountManager.json';

const instance = new web3.eth.Contract(
    JSON.parse(accountJSON.interface),
    '0xeBd81d94FD2f463265d20758225fee99850366d5'
);

export default instance;