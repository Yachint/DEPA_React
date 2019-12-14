import React,{Component} from 'react';
import {Table,Button, Accordion} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import {Link} from '../routes';
// import Campaign from '../ethereum/DocContract';
class RequestRow extends Component{
    
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
        const {id,requestings,docRequestings,docCount}=this.props;
       // const readyToFinalize= request.approvalCount > approversCount/2;
        return(
        <Row /*disabled={request.complete} positive={readyToFinalize && !request.complete}*/>
            <Cell>{id}</Cell>
            <Cell>{docRequestings[0]}</Cell>
            
            <Cell>{requestings.timeAfter}</Cell>
            <Cell>{requestings.dateType}</Cell>
            <Cell>{docRequestings[2]}</Cell>
            <Cell>
            <Link route={`/accounts/${this.props.address}/documents/showDoc`}>
                <a><Button color='teal' basic>Request</Button></a>
            </Link>
                </Cell>
        </Row>
        )
    }
}
export default RequestRow;