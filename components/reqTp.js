import React, { Component } from 'react';
import {Table, Button , Card } from 'semantic-ui-react'; 
import {Link} from '../routes'

class RequestThirdParty extends Component {
    state = {
        buttonDis:true
    }
    render() {
        const { id,orgname, description, address,requestee,timeafter,status,datetype} = this.props;
      
        const {Row,Cell}=Table;
        if(status!="PENDING"){
            this.setState({buttonDis:false})
        }
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
            <Link route={`/`}>
                <a><Button color='green' basic disabled={this.state.buttonDis}>Access Doc</Button></a>
            </Link>
                )}
                </Cell>
    
        </Row>
        );
    }

}

export default RequestThirdParty;