import React,{Component} from 'react';
import {Table,Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import {Link} from '../routes';
import DocContract from '../ethereum/DocContract'

class RequestDocRow extends Component{

    state = { hash : '', 
            errorMessage: '',
            loading : false,
            available : false};

    handleClick = async (event) =>{

        
        event.preventDefault();
        console.log(this.props.address);
        console.log(this.props.id);
        this.setState({ loading : true, errorMessage : ''});
        

        try {
            const accounts = await web3.eth.getAccounts();
            const contract = DocContract(this.props.address);
            let hashing = await contract.methods.getHash(this.props.id).call({
                from: accounts[0]
            });
            this.setState({hash : hashing, available : true});
        }catch(err){
            this.setState({ errorMessage : err.message});
        }

        this.setState({loading:false});
        console.log(this.state.errorMessage);

        
        //console.log("FFEFFF:")
        //console.log(this.state.hash);
        // window.open(url,"_blank");

        
    }

    openLink = (event) => {
        event.preventDefault();
        let url = "https://ipfs.infura.io/ipfs/"+this.state.hash;
        window.open(url,"_blank");
    }
    
    render(){
        const buttonHide = this.state.available ? {} : {display : 'none'}
        const {Row,Cell}=Table;
        const {id,docRequestings,docCount, address}=this.props;
        return(
        <Row>
            <Cell>{id}</Cell>
            <Cell>{docRequestings[0]}</Cell>
            <Cell>{docRequestings[2]}</Cell>
            <Cell>
            <Button loading={this.state.loading} onClick={this.handleClick} color='teal' basic>Get</Button>
            
                </Cell>
            <Cell>
            <Button style={buttonHide} onClick={this.openLink} color='blue'>Access</Button>
            
                </Cell>
        </Row>
        )
    }
}
export default RequestDocRow;