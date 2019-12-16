import React,{Component} from 'react';
import {Table,Button} from 'semantic-ui-react';
import {Link} from '../routes';
import DocContract from '../ethereum/DocContract';
import web3 from '../ethereum/web3';
import {Router} from '../routes'

class GetterRequestRow extends Component{

    state = { errorMessage: '',
            loading : false,
            available : false};

   onAccept = async (event) => {
        this.setState({ loading : true, errorMessage : ''});
        event.preventDefault();

        try{
            const accounts = await web3.eth.getAccounts();
            const contract = DocContract(this.props.address);
            await contract.methods.grantPermission(this.props.id).send({
                from: accounts[0]
            });
        Router.pushRoute(`/history`);

        }catch(err){
            this.setState({errorMessage : err.message});
        }
        console.log(this.state.errorMessage);
        this.setState({loading:false});
        

   }

   onReject = async (event) => {
        this.setState({ loading : true, errorMessage : ''});
        event.preventDefault();

        try{
            const accounts = await web3.eth.getAccounts();
            const contract = DocContract(this.props.address);
            await contract.methods.rejectRequest(this.props.id).send({
                from: accounts[0]
            });
            //Router.pushRoute(`/accounts/User/manage/${this.props.address}/requests`);
        }catch(err){
            this.setState({errorMessage : err.message});
        }

        console.log(this.state.errorMessage);
        this.setState({loading:false});
        
   }

    render(){
        const {Row,Cell}=Table;
        const {id,requestings,reqCount, address}=this.props;
        let cond;
        var buttonDis = true;
        if(requestings.granted==true){
            cond = "true";
            
        }
        else{
            cond = "false";
            buttonDis = false;
        }
        //console.log(requestings.granted);
        return(
        <Row>
            <Cell>{id}</Cell>
            <Cell>{requestings.requester}</Cell>
            <Cell>{requestings.docIndex}</Cell>
            <Cell>{cond}</Cell>
            <Cell>{requestings.timeAfter}</Cell>
            <Cell>{requestings.dateType}</Cell>
            <Cell>
            {/* <Link route="/"> */}
                {/* <a> */}
                    <Button onClick={this.onAccept} loading={this.state.loading} disabled={buttonDis} color='blue'>Accept</Button>
                    {/* </a> */}
            {/* </Link> */}
                </Cell>
            <Cell>
                {/* <Link route="/"> */}
                {/* <a> */}
                    <Button onClick={this.onReject} loading={this.state.loading} disabled={buttonDis} color='red'>Reject</Button>
                    {/* </a> */}
            {/* </Link> */}
            </Cell>
        </Row>  
        )
    }
}

export default GetterRequestRow;