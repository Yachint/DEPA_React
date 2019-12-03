import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import AM from '../../ethereum/Accounts';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes'

class AccountsNew extends Component {
    
    state = { fname : '', 
            lname : '',
            errorMessage: '',
            loading : false};

    onSubmit = async (event) => {
        event.preventDefault();
        
        this.setState({ loading : true, errorMessage : ''});

        try {
            const accounts = await web3.eth.getAccounts();
            await AM.methods.createAccount(
                this.state.fname,
                this.state.lname
            ).send({
                from : accounts[0]
            });
            Router.pushRoute('/');
        }catch(err){
            this.setState({ errorMessage : err.message});
        }

        this.setState({loading:false});
    };

    render() {
        return (
            <Layout>
                <h3>Create an Account</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>First Name</label>
                        <Input 
                        value={this.state.fname}
                        onChange = {(event) => {
                            this.setState({ fname : event.target.value});
                        }}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Last Name</label>
                        <Input 
                        value={this.state.lname}
                        onChange = {(event)=> {
                            this.setState({ lname : event.target.value});
                        }}
                        />
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>Create!</Button>

                </Form>
            </Layout>
        );
    }

}

export default AccountsNew;