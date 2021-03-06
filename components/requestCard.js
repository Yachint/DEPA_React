import React, { Component } from 'react';
import web3 from '../ethereum/web3';
import DocContract from '../ethereum/DocContract';
import { Button , Card } from 'semantic-ui-react'; 
import {Link} from '../routes'

class CardRenderer extends Component {
    
    render() {
        const { fname, lname, address, docs,type} = this.props;
        // console.log(type);
        return(
            <Card fluid={true}>
                <Card.Content>
                    <Card.Header>{fname} {lname}</Card.Header>
                    <Card.Meta>{address}</Card.Meta>
                    <Card.Description>No. of Documents :{docs}</Card.Description>

                </Card.Content>
                <Card.Content extra>
                { type!="User" ?
                <Link route={`/accounts/${this.props.address}`}>
                <a>    <Button color='blue'>View Profile</Button></a>
                </Link> :(null)
                }
                </Card.Content>
        

            </Card>
        );
    }

}

export default CardRenderer;