import React,{Component} from 'react';
import {Table,Button, Accordion} from 'semantic-ui-react';
class RequestAction extends Component{

    render(){
        const {Row,Cell}=Table;
        const {id,requestings}=this.props;
        return(
        <Row>
            <Cell>{id}</Cell>
            <Cell>{requestings.action}</Cell>
            <Cell>{requestings.fromAdd}</Cell>
            <Cell>{requestings.ToAdd}</Cell>
            <Cell>{requestings.feePaid}</Cell>
            <Cell>{requestings.tstamp}</Cell>
        </Row>
        )
    }
}
export default RequestAction;