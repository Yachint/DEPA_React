import React, {Component} from 'react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import Campaign from '../../ethereum/DocContract'
import {Button,Table} from 'semantic-ui-react';
import {Link} from  '../../routes'; 
import RequestRow from '../../components/RequestRow';

class RequestIndex extends Component{
    static async getInitialProps(props){
        const {address}=props.query;
        
        const campaign=Campaign(address);
        const docCount = await campaign.methods.getDocumentsLength().call();
        const reqCount = await campaign.methods.getRequestsLength().call();
        // const approversCount=await campaign.methods.approversCount().call();
        // const requestings=await Promise.all(
        //     Array(parseInt(reqCount)).fill().map((element,index)=>{
        //         return campaign.methods.requests(index).call()
        //     })
        // );
        //console.log(requestings);
        const docRequestings=await Promise.all(
            Array(parseInt(docCount)).fill().map((element,index)=>{
                return campaign.methods.getDocument(index).call()
            })
        );
        console.log(docRequestings);
        return{address,docRequestings,docCount}; 
    }

    renderRow(){
        return this.props.docRequestings.map((docRequest,index)=>{
            return <RequestRow
            key={index}
            id={index}
            docRequestings={docRequest}
            docCount={this.props.docCount}
            />
        })
    }
    
    render(){
        const{Header,Row,HeaderCell,Body}=Table;
        return (
            <Layout>
                <h3>Requests</h3>
                <Link route={`/accounts/${this.props.address}/uploadNew`}>
                <a>
                    <Button primary floated='right' style={{marginBottom: 10}}>Add Request</Button>
                </a>
            </Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Doc Type</HeaderCell>                        
                        <HeaderCell>Access Fee (Wei)</HeaderCell>
                        <HeaderCell>Request ?</HeaderCell>
                    </Row>
                </Header>
                <Body>
                   {this.renderRow()}
                </Body>
            </Table>
            <div>Found {this.props.requestCount} requests.</div>
            </Layout>
        );
    };
};

export default RequestIndex;