import React,{Component} from 'react';
import tp from '../../../ethereum/ThirdParty';
import {Button,Table} from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import {Link} from '../../../routes';
import RequestTP from '../../../components/reqTp';
class ManageTP extends Component{

    static async getInitialProps(props){
        const {address}=props.query;
        const tpAddr=tp(address);
        const orgName=await tpAddr.methods.orgName().call();
        const reqLen=await tpAddr.methods.getRequestsLength().call();
        const description=await tpAddr.methods.description().call();
        const docRequestings=await Promise.all(
            Array(parseInt(reqLen)).fill().map((element,index)=>{
                return tpAddr.methods.requests(index).call()
            })
        );

        // console.log(docRequestings);
        return { address,tpAddr,orgName,reqLen,docRequestings,description};
    }

    renderRow(){
        return this.props.docRequestings.map((docRequest,index)=>{
            return <RequestTP
            key={index}
            id={index}
            conAddress = {docRequest.contractAdd}
            address={this.props.address}
            docIndex = {docRequest.docIndex}
            orgname={this.props.orgName}
            requestee={docRequest.requestee}
            timeafter={docRequest.timeAfter}
            datetype={docRequest.dateType}
            status={docRequest.status}
            description={this.props.description}
            />
        })
    }

    render(){
        
        const{Header,Row,HeaderCell,Body}=Table;
        return (
            <Layout>
                <h3>Requests</h3>
                <Link route={`/`}>
                <a>
                    <Button primary floated='right' style={{marginBottom: 10}}>New Request</Button>
                </a>
            </Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Requestee</HeaderCell>
                        <HeaderCell>Time Window</HeaderCell>
                        <HeaderCell>Date Type</HeaderCell>
                        {/* <HeaderCell>Access Fee (Wei)</HeaderCell> */}
                        <HeaderCell>Status</HeaderCell>
                        <HeaderCell>Get Document</HeaderCell>
                        <HeaderCell>Access Link</HeaderCell>
                    </Row>
                </Header>
                <Body>
                   {this.renderRow()}
                </Body>
            </Table>
            <div>Found {this.props.reqLen} requests.</div>
            </Layout>
        );
    };
};

export default ManageTP;