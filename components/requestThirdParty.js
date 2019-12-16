import React, { Component } from 'react';
import { Button , Card } from 'semantic-ui-react'; 
import {Link} from '../routes'

class TPRenderer extends Component {
    
    render() {
        const {type, orgName, description, address} = this.props;
        // console.log(type);
        return(
            <Card fluid={true}>
                <Card.Content>
                    <Card.Header>{orgName}</Card.Header>
                    <Card.Meta>{address}</Card.Meta>
                    <Card.Description>{description}</Card.Description>

                </Card.Content>
                <Card.Content extra>
                    {type==""?
                <Link route={`/accounts/${this.props.address}`}>
                <a>    <Button color='blue'>View Profile</Button></a>
                </Link> :(null)
                }
                </Card.Content>

            </Card>
        );
    }

}

export default TPRenderer;