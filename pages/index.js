import React, { Component } from 'react';
import AccFactory from '../ethereum/Accounts'
import RequestCard from '../components/requestCard';
import DocContract from '../ethereum/DocContract';
import { Card, Button, Grid } from 'semantic-ui-react'
import Layout from '../components/Layout';
import { Link } from '../routes';

class AccountIndex extends Component {
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

    render() {
        //console.log(this.props.dataItems);
        return (
            <Layout>
                 <h3>DEPA Accounts</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Card.Group>
                            {this.renderCards()}
                            </Card.Group>
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <Link route="/accounts/new">
                            <a>
                            <Button 
                            content = "Sign up"
                            icon = "add circle"
                            primary={true}
                            floated = "right"/>
                            </a>
                        </Link>

                        <Link route="/accounts/uploadNew">
                            <a>
                            <Button 
                            content = "Deposit Files"
                            icon = "upload"
                            secondary={true}
                            floated = "right"/>
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