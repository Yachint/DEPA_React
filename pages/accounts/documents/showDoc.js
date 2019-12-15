import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import DocContract from '../../../ethereum/DocContract'
import web3 from '../../../ethereum/web3';
import {Router} from '../../../routes'

class DocShow extends Component {

   state = { type : '', 
            after : '',
            errorMessage: '',
            loading : false};
   
   static async getInitialProps(props){
      const {address, id, fee}=props.query;
      
      return { address, id, fee };
  }

  onSubmit = async (event) => {
   event.preventDefault();
   
   this.setState({ loading : true, errorMessage : ''});

   try {
      const accounts = await web3.eth.getAccounts();
      const contract = DocContract(this.props.address);
      await contract.methods.requestPermission(
         this.props.id,
         this.state.type,
         this.state.after).send({
            value : this.props.fee,
            from: accounts[0]
         });
       
      //  await AM.methods.createAccount(
      //      this.state.fname,
      //      this.state.lname
      //  ).send({
      //      from : accounts[0]
      //  });
       Router.pushRoute('/history');
   }catch(err){
       this.setState({ errorMessage : err.message});
   }

   this.setState({loading:false});
   };

      render() {
        return (
            <Layout>
                <h3>Submit a Request</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Enter time Unit</label>
                        <Input 
                        label="seconds/minutes/hours/days"
                        labelPosition = "right"
                        value={this.state.type}
                        onChange = {(event) => {
                            this.setState({ type : event.target.value});
                        }}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Enter Duration</label>
                        <Input 
                        value={this.state.after}
                        onChange = {(event)=> {
                            this.setState({ after : event.target.value});
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
export default DocShow;