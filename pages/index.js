import React, { Component } from 'react';
import AccFactory from '../ethereum/Accounts'
import RequestCard from '../components/requestCard';
import DocContract from '../ethereum/DocContract';
import { Card, Button, Grid } from 'semantic-ui-react'
import Layout from '../components/Layout';
import { Link } from '../routes';
import web3 from '../ethereum/web3';
import ThirdParty from '../ethereum/ThirdParty';
import TPCard from '../components/requestThirdParty';

class AccountIndex extends Component {

    state = {
        user : '',
        warning : false,
        loading : true,
        buttonDis : true,
        tp : false,
        type : '',
        address : ''
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

        const ThirdParties = await AccFactory.methods.getThirdPartyList().call();
        const tarr = await Promise.all(ThirdParties.map(async addr => {
            let acc = ThirdParty(addr);
            let orgName = await acc.methods.orgName().call();
            let description = await acc.methods.description().call();
            const item = {
                orgName :orgName,
                description : description,
                address : addr
            }
            return item;
        })

        );
        
        //console.log(tarr);
        return { dataItems : arr, userAccounts : userAccounts, tpItems: tarr};
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
            const isThirdParty = await AccFactory.methods.getContractAddress(accounts[0]).call();
            //console.log(isUser);
            if(isUser == "0x0000000000000000000000000000000000000000" 
            && isThirdParty == "0x0000000000000000000000000000000000000000"){
                user = "Guest";
            }else{
                if(isUser !== "0x0000000000000000000000000000000000000000"){
                    const userAcc = DocContract(isUser);
                    let firstName = await userAcc.methods.firstName().call();
                    user = firstName;
                    this.setState({type: 'User', address: isUser});
                }
                else{
                    const userAcc = ThirdParty(isThirdParty);
                    let firstName = await userAcc.methods.orgName().call();
                    user = firstName;
                    this.setState({tp : true, type: 'ThirdParty', address: isThirdParty});
                }
                
            }
            warn = false;
        }
        
        this.setState({ user : user, warning : warn, loading: false});
        if(this.state.warning == false && this.state.tp == false){
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

    renderTP(){
        return this.props.tpItems.map((item,index) => {
            return <TPCard 
            key={index}
            orgName={item.orgName}
            description={item.description}
            address={item.address}
            />
        })
    }

    logInSuccess = () => {
       return ( <div className="ui steps" fluid={true}>
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
          <div className="content" style={{"wordWrap": "break-word"}}>
              <div className="title">Can't Login!</div>
               <p style={{"wordWrap": "break-word"}}>Please install Metamask Extension or Log in!</p>
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
                 <h3></h3>
                <Grid>
                    <Grid.Row>
                    
                        <Grid.Column width={6}>
                        <h3>DEPA Accounts</h3>
                            <Card.Group>
                            {this.renderCards()}
                            </Card.Group>
                        </Grid.Column>

                        <Grid.Column width={6}>
                        <h3>Third Party Accounts</h3>
                            <Card.Group>
                            {this.renderTP()}
                            </Card.Group>
                        </Grid.Column>

                        <Grid.Column width={4} style={{"marginTop" : "35px"}}>
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
                            style = {{marginTop : "20px", marginBottom : "20px"}}
                            content = "Sign up"
                            icon = "add circle"
                            primary={true}
                            floated = "right"
                            />
                            </a>
                        </Link>

                        <Link route="/accounts/uploadNew" params={{user : this.state.user}}>
                            <a>
                            <Button 
                            style = {{marginTop : "20px"}}
                            content = "Deposit Files"
                            icon = "upload"
                            secondary={true}
                            floated = "right"
                            disabled={this.state.buttonDis}/>
                            </a>
                        </Link>
                        <Link route={`/accounts/${this.state.type}/manage/${this.state.address}`} params={{user : this.state.user}}>
                            <a>
                            <Button 
                            style = {{marginTop : "50px"}}
                            className = "ui green button"
                            content = "Manage Account"
                            icon = "user circle"
                            fluid = {true}
                            disabled={this.state.warning}/>
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