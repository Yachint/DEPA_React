import React,{Component} from 'react';
import DocContract from '../../../ethereum/DocContract'
import {Button,Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import RDR from '../../../components/requestDocRow';
import Layout from '../../../components/Layout'

class ManageUser extends Component{

    static async getInitialProps(props){
        const {address}=props.query;

        const campaign = DocContract(address);
        const fname = await campaign.methods.firstName().call();
        const lname = await campaign.methods.lastName().call();
        const docCount = await campaign.methods.getDocumentsLength().call();
        const docRequestings=await Promise.all(
            Array(parseInt(docCount)).fill().map((element,index)=>{
                return campaign.methods.getDocument(index).call()
            })
        );
        
        return { address, docRequestings, docCount, fname, lname};
    }

    renderRow(){
        return this.props.docRequestings.map((docRequest,index)=>{
            return <RDR
            key={index}
            id={index}
            address={this.props.address}
            docRequestings={docRequest}
            docCount={this.props.docCount}
            />
        })
    }

    render(){
        const{Header,Row,HeaderCell,Body}=Table;
        return (
            <Layout>
                <h2>Welcome, {this.props.fname} {this.props.lname}</h2>
                <h3>Your Uploaded Documents :</h3>
                <Link route={`/accounts/User/manage/${this.props.address}/requests`}>
                <a>
                    <Button primary floated='right' style={{marginBottom: 10}}>See Requests</Button>
                </a>
            </Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Doc Type</HeaderCell>                        
                        <HeaderCell>Access Fee (Wei)</HeaderCell>
                        <HeaderCell>Unlock Document</HeaderCell>
                        <HeaderCell>Access Links</HeaderCell>
                    </Row>
                </Header>
                <Body>
                   {this.renderRow()}
                </Body>
            </Table>
            <div>Found {this.props.requestCount} documents.</div>
            </Layout>
        );
    };
};

export default ManageUser;