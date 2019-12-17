import React, {Component} from 'react';
import AccFactory from '../ethereum/Accounts'
import {Button,Table} from 'semantic-ui-react';
import {Link} from  '../routes';  
import RequestAction from '../components/requestAction';
import Layout from '../components/Layout';

class ActionHistory extends Component {

    static async getInitialProps(props){
        
        const docCount = await AccFactory.methods.getActionsLength().call();
        var val = [];
        const requestings=await Promise.all(
            Array(parseInt(docCount)).fill().map((element,index)=>{
                return AccFactory.methods.actions(index).call()
            })
        );

        requestings.forEach(element => {
            const t = new Date(parseInt(element.tstamp)*1000);
            val.push(t.toString().substring(4,24));
            
        });



        return { requestings : requestings, docCount: docCount , val : val};
    }

    requestHistory = () => {
        return this.props.requestings.map((request,index)=>{
            return <RequestAction
            key={index}
            id={index}
            requestings={request}
            val={this.props.val[index]}
            />
        })
    }

    render(){
        const{Header,Row,HeaderCell,Body}=Table;
        return (
            <Layout>
                <h3>Actions History</h3>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Action Type</HeaderCell>
                        <HeaderCell>From Address</HeaderCell>
                        <HeaderCell>To Address</HeaderCell>
                        <HeaderCell>Fee Paid(gwei)</HeaderCell>
                        <HeaderCell>Time Stamp</HeaderCell>
                    </Row>
                </Header>
                <Body>
                   {this.requestHistory()}
                </Body>
            </Table>
            <div>Found {this.props.docCount} actions.</div>
            </Layout>
        );
    };
};


export default ActionHistory;