import React, { Component } from 'react';
import {Table, Button , Card } from 'semantic-ui-react'; 
import {Link} from '../routes'

class RequestThirdParty extends Component {
    state = {
        buttonDis:true
    }
    const { id,orgname, description, address,requestee,timeafter,status,datetype} = this.props;
    if(status!="PENDING"){
            this.setState({buttonDis:false})
        }
    render() {
       
      
        const {Row,Cell}=Table;
        
        return(
            <Row /*disabled={request.complete} positive={readyToFinalize && !request.complete}*/>
            <Cell>{id}</Cell>
            <Cell>{requestee}</Cell>
            <Cell>{timeafter}</Cell>
            <Cell>{datetype}</Cell>
            <Cell>{status}</Cell>
            <Cell>{
                this.state.buttonDis ? 
                <Button color='red' basic disabled={this.state.buttonDis}> 
                Pending !!
                </Button>
                :(
                <Button color='green' basic disabled={this.state.buttonDis}>Access Doc</Button>
                )}
                </Cell>
    
        </Row>
        );
    }

}

export default RequestThirdParty;
