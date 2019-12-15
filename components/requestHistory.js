import React,{Component} from 'react';
import {Table,Button, Accordion} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import {Link} from '../routes';
// import Campaign from '../ethereum/DocContract';
class RequestHistory extends Component{
    
    // onApprove = ()=>{
        // const campaign=Campaign(this.props.address);
        // const accounts=await web3.eth.getAccounts();
        // await campaign.methods.approveRequest(this.props.id).send({
        //     from: accounts[0]
        // });
    
    // };

    // onFinalize = async ()=>{
    //     const campaign=Campaign(this.props.address);
    //     const accounts=await web3.eth.getAccounts();
    //     await campaign.methods.finalizeRequest(this.props.id).send({
    //         from: accounts[0]
    //     });
    // }

    render(){
        const {Row,Cell}=Table;
        const {id,requestings}=this.props;
        //let tdate = new Date(requestings.tdate * 1000);
        //let tgranted = new Date(requestings.tgranted * 1000);
       // const readyToFinalize= request.approvalCount > approversCount/2;
        return(
        <Row /*disabled={request.complete} positive={readyToFinalize && !request.complete}*/>
            <Cell>{id}</Cell>
            <Cell>{requestings.reqIndex}</Cell>
            <Cell>{requestings.requester}</Cell>
            <Cell>{requestings.requestee}</Cell>
            <Cell>{requestings.tdate}</Cell>
            <Cell>{requestings.typeofDoc}</Cell>
            <Cell>{requestings.feePaid}</Cell>
            <Cell>{requestings.tgranted}</Cell>
            <Cell>{requestings.tUnit}</Cell>
            <Cell>{requestings.action}</Cell>
        </Row>
        )
    }
}
export default RequestHistory;