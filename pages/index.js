import React, { Component } from 'react';
import AccFactory from '../ethereum/Accounts'
import RequestCard from '../components/requestCard';
import DocContract from '../ethereum/DocContract';
import { Card, Button } from 'semantic-ui-react'

class AccountIndex extends Component {
    static async getInitialProps(){
        const userAccounts = await AccFactory.methods.getDeployedAccounts().call();
        // const instance = DocContract(userAccounts[0]);
        // const fname = await instance.methods.firstName().call();
        var test;
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
        return this.props.dataItems.map(item => {
            <RequestCard 
            fname={item.fname}
            lname={item.lname}
            address={item.address}
            docs={item.docs}
            />
        })
    }

    render() {
        console.log(this.props.dataItems);
        return (
            <div>
                {this.props.userAccounts[0]}
                +++++
                {this.test}
                <Card.Group>
                    {this.renderCards()}
                </Card.Group>
            </div>
        );
    }
}

export default AccountIndex;