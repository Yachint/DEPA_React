import React, { Component } from 'react';
import AccFactory from '../ethereum/Accounts'
import RequestCard from '../components/requestCard';
import DocContract from '../ethereum/DocContract';
import { Card, Button, Grid } from 'semantic-ui-react'
import Layout from '../components/Layout';
import { Link } from '../routes';
import web3 from '../ethereum/web3';

class AccountIndex extends Component {

    state = {
        user : '',
        warning : false,
        loading : true,
        buttonDis : true
    }
    
    async componentDidMount() {
        this.getLoginInfo();
    }

    static async getInitialProps(){
        const userAccounts = await AccFactory.methods.getDeployedAccounts().call();
        // const instance = DocContract(userAccounts[0]);
        // const fname = await instance.methods.firstName().call();
        //var test;
        const arr = await Promise.all(userAccounts.map(async addr => {
            let acc = DocContract(addr);
            let firstName = await acc.methods.firstName().call();
            let lastName = await acc.methods.lastName().call();
            let documents = await acc.methods.getDocumentsLength().call();
            const item = {
                fname :firstName,
                lname : lastName,
                address : addr,
                docs : documents
            }
            return item;
        })

        );
        
        
        return { dataItems : arr, userAccounts : userAccounts};
    }

    getLoginInfo = async () => {
        this.setState({loading : true});
        let user;
        let warn;
        const accounts = await web3.eth.getAccounts();
        if(accounts.length == 0){
            warn = true;
        }
        else{
            const isUser = await AccFactory.methods.getMyAccount(accounts[0]).call();
            console.log(isUser);
            if(isUser == "0x0000000000000000000000000000000000000000"){
                user = "Guest";
            }else{
                const userAcc = DocContract(isUser);
                let firstName = await userAcc.methods.firstName().call();
                let lastName = await userAcc.methods.lastName().call();
                user = firstName;
            }
            warn = false;
        }
        
        this.setState({ user : user, warning : warn, loading: false});
        if(this.state.warning == false){
            this.setState({buttonDis : false});
        }
    }

    renderCards(){
        return this.props.dataItems.map((item,index) => {
            return <RequestCard 
            key={index}
            fname={item.fname}
            lname={item.lname}
            address={item.address}
            docs={item.docs}
            />
        })
    }

    logInSuccess = () => {
       return ( <div className="ui steps">
       <div className="completed step">
         <i className="user circle"></i>
         <div className="content">
             <div className="title">Welcome, {this.state.user}</div>
              <div className="description">Browsing using Metamask</div>
         </div>
          </div>
     </div>
     );
    }

    loadingMessage = () => {
        return(<div className="ui icon message">
        <i className="notched circle loading icon"></i>
        <div className="content">
          <div className="header">
            Just one second
          </div>
          <p>We're trying to log you in.</p>
        </div>
      </div>);
    }

    logInFailure = () => {
        return (<div className="ui steps">
        <div className="step">
          <i className="close icon"></i>
          <div className="content" style={{"word-wrap": "break-word"}}>
              <div className="title">Can't Login!</div>
               <p style={{"word-wrap": "break-word"}}>Please install Metamask Extension or Log in!</p>
          </div>
           </div>
      </div>
      );
    }

    render() {
        
        console.log(this.state.warning);
        const noMetamask = this.state.warning ? {} : {display : 'none'};
        const loadMessage = this.state.loading ? {} : {display : 'none'};
        let enabledMetamask;
        if(this.state.warning==false && this.state.loading==false){
            enabledMetamask = {};
        }
        else{
            enabledMetamask = {display : 'none'};
        }
        // if(loadMessage){
        //     enabledMetamask = {display : 'none'};
        // }
        return (
            <Layout user={this.state.user}>
                 <h3>DEPA Accounts</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Card.Group>
                            {this.renderCards()}
                            </Card.Group>
                        </Grid.Column>

                        <Grid.Column width={4}>
                        <div style={loadMessage}>
                            {this.loadingMessage()}
                        </div>
                        <div style = {noMetamask}>
                            {this.logInFailure()}
                        </div>
                        <div style = {enabledMetamask}>
                            {this.logInSuccess()}
                        </div>
                            <Link route="/accounts/new">
                            <a>
                            <Button 
                            content = "Sign up"
                            icon = "add circle"
                            primary={true}
                            floated = "right"
                            disabled={this.state.buttonDis}/>
                            </a>
                        </Link>

                        <Link route="/accounts/uploadNew" params={{user : this.state.user}}>
                            <a>
                            <Button 
                            content = "Deposit Files"
                            icon = "upload"
                            secondary={true}
                            floated = "right"
                            disabled={this.state.buttonDis}/>
                            </a>
                        </Link>
                        </Grid.Column>

                        
                    </Grid.Row>
                </Grid>
                   
                    

                    
                
            </Layout>
        );
    }
}

export default AccountIndex;