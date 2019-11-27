import React, { Component } from 'react';
import web3 from '../ethereum/web3';
import DocContract from '../ethereum/DocContract';
import { Button , Card } from 'semantic-ui-react'; 

class CardRenderer extends Component {
    
    render() {
        const { fname, lname, address, docs} = this.props;
        console.log(fname);
        return(
            <Card fluid={true}>
                <Card.Content>
                    <Card.Header>{fname} {lname}</Card.Header>
                    <Card.Meta>{address}</Card.Meta>
                    <Card.Description>No. of Documents :{docs}</Card.Description>

                </Card.Content>
                <Card.Content extra>
                    <Button color='blue'>View Profile</Button>
                </Card.Content>

            </Card>
        );
    }

}

export default CardRenderer;