import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import AM from '../../ethereum/Accounts';
import web3 from '../../ethereum/web3';
import ipfsApi from 'ipfs-api';
import DocContract from '../../ethereum/DocContract';

class FileForm extends Component {

    state = { expiry: false, docType: '', minFee: '', hash: '',
             errorMessage: '', loading: false, file : '', fileName : '',
             hash: '', showLoading: false, showCompleted: false};

    constructor(props){
        super(props);
        this.state = { user : this.props.utoken}
        console.log("USER ::");
        console.log(this.state.utoken);
    }

    uploadFile = async (file) => {
        const ipfs = ipfsApi('ipfs.infura.io', '5001', {protocol: 'https'});
          
          

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const buffer = Buffer.from(reader.result);
                ipfs.add(buffer).then(files => {
                    resolve(files);
                }).catch(error => reject(error))
            }
            reader.readAsArrayBuffer(file)
        })
    }

    loadingMessage = () => {
        return (
            <div className="ui icon message">
                        <i className="notched circle loading icon"></i>
                        <div className="content">
                            <div className="header">
                            Just a few seconds
                            </div>
                            <p>We're currently uploading your document to IPFS...</p>
                        </div>
                    </div>
        );
    }

    completeMessage = () => {
        return (
            <div className="ui icon message">
                        <i className="inbox icon"></i>
                        <div className="content">
                            <div className="header">
                            Succesfully Uploaded to IPFS! 
                            </div>
                            <p>The hash provided will act as unique link to your document</p>
                        </div>
                    </div>
        );
    }



    onFileInput = async (event) => {
        this.setState({ loading : true, showLoading: true});
        this.setState({ file: event.target.files[0], fileName: event.target.files[0].name },
      () => {
        console.log(
          "File chosen --->",
          this.state.file,
          console.log("File name  --->", this.state.fileName)        );
        
        
      }
    );


        const file = event.target.files[0];
        const files = await this.uploadFile(file);
        const multihash = files[0].hash;
        console.log(multihash);
        this.setState({loading:false, showLoading: false, showCompleted: true, hash : multihash});
    }


    

//   fileChange = async e => {
//     this.setState(
//       { file: e.target.files[0], fileName: e.target.files[0].name },
//       () => {
//         console.log(
//           "File chosen --->",
//           this.state.file,
//           console.log("File name  --->", this.state.fileName)        );
        
        
//       }
//     );

//     try{

//         this.setState({ loading : true, errorMessage : 'DOING'});
//         let buff;
//             var file = e.target.files[0];
//             const reader = new FileReader();
//             reader.onload = function(event) {
//                 console.log(event.target.result)
//                 buff = event.target.result;
//               };
//             reader.readAsArrayBuffer(file);
//             // reader.onloadend = async () => {
//             //     const fileBuff = Buffer(reader.result);
//             //     ipfs.files.add(fileBuff,function(err,file){
//             //         if(err){
//             //             console.log(err);
//             //         }
//             //         else{
//             //             fileHash = file.path;
//             //         }
//             //     })
//             // }
//             var getHash = await IPFS_Client(buff);
//             this.setState({ hash : getHash});
            
//     }catch(err){
//         this.setState({ errorMessage : err.message});
//     }

//     this.setState({loading:false, errorMessage : 'DONNEEE'});
    
//   };


    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading : true, errorMessage : ''});

        try{
            const accounts = await web3.eth.getAccounts();
            const myAddress = await AM.methods.getMyAccount(accounts[0]).call();
            console.log(myAddress);
            const userAcc = DocContract(myAddress);

            const { expiry, docType, minFee, hash} = this.state;
            
            await userAcc.methods.submitDocument(expiry, docType, minFee, hash).send({
                from: accounts[0]
            });
            }catch(err){
                this.setState({ errorMessage : err.message});
            }

            this.setState({loading:false});
    }

    render() {
        const loadStyle = this.state.showLoading ? {} : {display : 'none'};
        const completeStyle = this.state.showCompleted ? {} : {display : 'none'};
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
                    <div style={loadStyle}>
                        {this.loadingMessage()}
                    </div>
                    <div style={completeStyle}>
                        {this.completeMessage()}
                    </div>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    
                        <div className="ui fluid segment">
                            <Form.Input type="file" onChange={this.onFileInput}
                            id="file"
                            hidden/>
                            <Form.Input
                                fluid
                                label="File Chosen: "
                                placeholder="Use the above bar to browse your file system"
                                readOnly
                                value={this.state.fileName}
                            />
                        </div>
  
                    

                    <Button loading={this.state.loading} primary >Submit Document</Button>
                </Form>
                    <h3>HASH : {this.state.hash}</h3>
    
            </Layout>
        );
    }
}

export default FileForm;