import web3 from './web3';
import DocJSON from './build/DocumentContract.json';

export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(DocJSON.interface),
        address
    );
};