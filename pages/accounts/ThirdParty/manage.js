import React,{Component} from 'react';
import tp from '../../../ethereum/ThirdParty';
import {Button,Table} from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import {Link} from '../../../routes';
import RequestTP from '../../../components/checkOutRequests';
import web3 from '../../../ethereum/web3';
class ManageTP extends Component{

    static async getInitialProps(props){
        const {address}=props.query;
        const tpAddr=tp(address);

        const orgName=await tpAddr.methods.orgName().call();
        const connArray = await tpAddr.methods.getConnArray().call();
        
        return { connArray, orgName, conAdd: address};
    }

    renderRow(){
        return this.props.connArray.map((addr,index)=>{
            return <RequestTP
            key={index}
            id={index}
            address={addr}
            conAdd={this.props.conAdd}
            />
        })
    }

    render(){
        
        const{Header,Row,HeaderCell,Body}=Table;
        return (
            <Layout>
                <h3>Requests</h3>
                <Body>
                   {this.renderRow()}
                </Body>
            {/* <div>Found {this.props.reqLen} requests.</div> */}
            </Layout>
        );
    };
};

export default ManageTP;