import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import DocContract from '../../../ethereum/DocContract';
import {Button, Table, } from 'semantic-ui-react'
import {Link} from '../../../routes'
import RROW from '../../../components/getterRequest';

class RequestGetter extends Component{

    static async getInitialProps(props){
        const {address}=props.query;

        const campaign=DocContract(address);
        const reqCount = await campaign.methods.getRequestsLength().call();
        const requestings=await Promise.all(
            Array(parseInt(reqCount)).fill().map((element,index)=>{
                return campaign.methods.requests(index).call();
            })
        );
        return{address,requestings,reqCount}; 
    }

    renderRow() {
        return this.props.requestings.map((docRequest,index)=>{
            return <RROW
            key={index}
            id={index} //FIX THIS TO docRequest.docIndex
            address={this.props.address}
            requestings={docRequest}
            reqCount={this.props.reqCount}
            />
        })

    }

    render(){
        const{Header,Row,HeaderCell,Body}=Table;
        return (
            <Layout>
                <h3>Requests</h3>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Requester</HeaderCell>
                        <HeaderCell>Document Index</HeaderCell>                        
                        <HeaderCell>Granted Status</HeaderCell>
                        <HeaderCell>Time Unit</HeaderCell>
                        <HeaderCell>Time Duration</HeaderCell>
                        <HeaderCell>Accept?</HeaderCell>
                        <HeaderCell>Reject?</HeaderCell>
                    </Row>
                </Header>
                <Body>
                   {this.renderRow()}
                </Body>
            </Table>
            <div>Found {this.props.reqCount} requests.</div>
            </Layout>
        );
    };
}

export default RequestGetter;
