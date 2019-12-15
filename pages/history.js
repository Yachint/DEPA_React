import React, {Component} from 'react';
import AccFactory from '../ethereum/Accounts'
import {Button,Table} from 'semantic-ui-react';
import {Link} from  '../routes';  
import RequestHistory from '../components/requestHistory';
import Layout from '../components/Layout';

class ShowHistory extends Component {

    static async getInitialProps(props){
        
        const docCount = await AccFactory.methods.getLedgerLength().call();
        const requestings=await Promise.all(
            Array(parseInt(docCount)).fill().map((element,index)=>{
                return AccFactory.methods.ledger(index).call()
            })
        );

        console.log(requestings);

        return { requestings : requestings, docCount: docCount };
    }

    requestHistory = () => {
        return this.props.requestings.map((request,index)=>{
            return <RequestHistory
            key={index}
            id={index}
            requestings={request}
            />
        })
    }

    render(){
        const{Header,Row,HeaderCell,Body}=Table;
        return (
            <Layout>
                <h3>Transaction History</h3>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Request Index</HeaderCell>
                        <HeaderCell>Requester</HeaderCell>
                        <HeaderCell>Requestee</HeaderCell>
                        <HeaderCell>Date</HeaderCell>
                        <HeaderCell>Type of Document</HeaderCell>
                        <HeaderCell>Fee Paid</HeaderCell>
                        <HeaderCell>Time Granted</HeaderCell>
                        <HeaderCell>Time Unit</HeaderCell>
                        <HeaderCell>Request Status</HeaderCell>
                    </Row>
                </Header>
                <Body>
                   {this.requestHistory()}
                </Body>
            </Table>
            <div>Found {this.props.docCount} requests.</div>
            </Layout>
        );
    };
};


export default ShowHistory;