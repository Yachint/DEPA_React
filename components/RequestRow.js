import React,{Component} from 'react';
import {Table,Button, Accordion} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
// import Campaign from '../ethereum/DocContract';
class RequestRow extends Component{

    // onApprove = async ()=>{
    //     const campaign=Campaign(this.props.address);
    //     const accounts=await web3.eth.getAccounts();
    //     await campaign.methods.approveRequest(this.props.id).send({
    //         from: accounts[0]
    //     });
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
        const {id,requestings,docCount}=this.props;
       // const readyToFinalize= request.approvalCount > approversCount/2;
        return(
        <Row /*disabled={request.complete} positive={readyToFinalize && !request.complete}*/>
            <Cell>{id}</Cell>
            <Cell>{requestings.requester}</Cell>
            <Cell>{requestings.requestee}</Cell>
            <Cell>{requestings.docIndex/*web3.utils.fromWei(request.fee,'ether')*/}</Cell>
            <Cell>{requestings.dateType}</Cell>
            <Cell>{requestings.granted}
            </Cell>
            <Cell>{requestings.timeAfter}
            </Cell>
        </Row>
        )
    }
}
export default RequestRow;
