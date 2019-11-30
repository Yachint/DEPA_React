import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import AM from '../../ethereum/Accounts';
import web3 from '../../ethereum/web3';

class FileForm extends Component {

    state = { expiry: false, docType: '', minFee: '', hash: '',
             errorMessage: '', loading: false, file : ''};

    onSubmit = async (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <Layout>
                <h3>Enter Document Details</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Expiry</label>
                        <Input 
                        label="true/false"
                        labelPosition = "right"
                        value={this.state.expiry} 
                        onChange={(event) => {
                            this.setState({
                                expiry: event.target.value
                            })
                        }}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Type of Document</label>
                        <Input 
                        value={this.state.docType} 
                        onChange={(event) => {
                            this.setState({
                                docType: event.target.value
                            })
                        }}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Access Fee</label>
                        <Input 
                        label="wei"
                        labelPosition = "right"
                        value={this.state.minFee} 
                        onChange={(event) => {
                            this.setState({
                                minFee: event.target.value
                            })
                        }}/>
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    
                    
                        <div className="ui fluid segment">
                            <input type="file" onChange={(event) => {
                                console.log(event);
                            }} className="inputfile" id="embedpollfileinput" />

                        </div>
  
                    

                    <Button loading={this.state.loading} primary >Submit Document</Button>
                </Form>
            </Layout>
        );
    }
}

export default FileForm;