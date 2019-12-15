import React, { Component } from 'react';
import { Button , Card } from 'semantic-ui-react'; 
import {Link} from '../routes'

class TPRenderer extends Component {
    
    render() {
        const { orgName, description, address} = this.props;
        //console.log(fname);
        return(
            <Card fluid={true}>
                <Card.Content>
                    <Card.Header>{orgName}</Card.Header>
                    <Card.Meta>{address}</Card.Meta>
                    <Card.Description>{description}</Card.Description>

                </Card.Content>
                <Card.Content extra>
                <Link route={`/accounts/${this.props.address}`}>
                <a>    <Button color='blue'>View Profile</Button></a>
                </Link>
                </Card.Content>

            </Card>
        );
    }

}

export default TPRenderer;