import React, { Component } from 'react';
import {Table, Button , Card } from 'semantic-ui-react'; 
import {Link} from '../routes'
import web3 from '../ethereum/web3';
import DocContract from '../ethereum/DocContract';

class RequestThirdParty extends Component {

    state = { errorMessage: '',
            loading : false,
            hash: '',
            available: false};
    // state = {
    //     buttonDis:true
    // }
    // if(status!="PENDING"){
    //         this.setState({buttonDis:false})
    //     }

    onAccept = async (event) => {
        this.setState({ loading : true, errorMessage : ''});
        event.preventDefault();
        console.log(this.props.conAddress);
        console.log(this.props.docIndex);

        try{
            const accounts = await web3.eth.getAccounts();
            const contract = DocContract(this.props.conAddress);
            let hash = await contract.methods.AccessDocument(this.props.docIndex).call({
                from: accounts[0]
            });
            this.setState({hash : hash, available: true});

            //Router.pushRoute(`/accounts/User/manage/${this.props.address}/requests`);

        }catch(err){
            this.setState({errorMessage : err.message});
        }
        console.log(this.state.hash);
        console.log(this.state.errorMessage);
        this.setState({loading:false});
        

   }

   openLink = (event) => {
    event.preventDefault();
    let url = "https://ipfs.infura.io/ipfs/"+this.state.hash;
    window.open(url,"_blank");
    }


    render() {
        const { id,orgname, description, address,requestee,timeafter,status,datetype} = this.props;
        var buttonDis = true;
        if(status!="PENDING"){
            buttonDis = false;
        }
        const {Row,Cell}=Table;
        const buttonHide = this.state.available ? {} : {display : 'none'}
        return(
            <Row /*disabled={request.complete} positive={readyToFinalize && !request.complete}*/>
            <Cell>{id}</Cell>
            <Cell>{requestee}</Cell>
            <Cell>{timeafter}</Cell>
            <Cell>{datetype}</Cell>
            <Cell>{status}</Cell>
            <Cell>{
                buttonDis ? 
                <Button color='red'onClick={this.onAccept} disabled={buttonDis} > 
                Pending !!
                </Button>
                :(
                <Button color='green'  loading={this.state.loading} onClick={this.onAccept} basic disabled={buttonDis}>Access Doc</Button>
                )}
                </Cell>
            <Cell>
            <Button style={buttonHide} onClick={this.openLink} color='blue'>Access</Button>
            </Cell>
    
        </Row>
        );
    }

}

export default RequestThirdParty;
