import React,{Component} from 'react';
import {Table,Button,Card} from 'semantic-ui-react';
import {Link} from '../routes';
import DocContract from '../ethereum/DocContract';
import web3 from '../ethereum/web3';
import TP from '../ethereum/ThirdParty';
import RowRenderer from '../components/reqTp';

class CheckOutRequests extends Component{
    state = { errorMessage: '',
            loading : false,
            available : false,
            array: []};

    renderRowList = () => {
        return this.state.array.map((elem,index)=>{
            return <RowRenderer
            key={index}
            id={index}
            docIndex = {elem.docIndex}
            conAddress={elem.contractAdd}
            requestee = {elem.requestee}
            timeafter = {elem.timeAfter}
            datetype = {elem.dateType}
            status = {elem.status}
            
            />
        })
    }

    handleClick = async (event) => {
        event.preventDefault();

        console.log(this.props.address);
        console.log(this.props.id);
        this.setState({ loading : true, errorMessage : ''});
        

        try {
            const accounts = await web3.eth.getAccounts();
            const contract = TP(this.props.conAdd);
            let length = await contract.methods.getArrayLength(this.props.address).call({
                from: accounts[0]
            });

            await contract.methods.setRequestArray(this.props.address).send({
                from: accounts[0]
            })

            const docRequestings=await Promise.all(
                Array(parseInt(length)).fill().map((element,index)=>{
                    return contract.methods.Irequests(index).call()
                })
            );
            console.log(docRequestings);
            this.setState({available : true, array : docRequestings});
        }catch(err){
            this.setState({ errorMessage : err.message});
        }

        this.setState({loading:false});
        console.log(this.state.errorMessage);
    }

        render(){
            
                const {Row,Cell,Header,HeaderCell,Body}=Table;
                const {address}=this.props;
                const isEnabled = this.props.available ? {} : {display : 'none'}
                return(
                    <div>
                        <Card fluid={true}>
                <Card.Content>
                    <Card.Header>{address}</Card.Header>
                    <Card.Meta>Click to view Requets</Card.Meta>

                </Card.Content>
                <Card.Content extra>
                <a><Button loading={this.state.loading} onClick ={this.handleClick} color='blue'>View Requests</Button></a>
                
                </Card.Content>

            </Card>
            <div>{this.state.available?
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Requestee</HeaderCell>                        
                        <HeaderCell>Time After</HeaderCell>
                        <HeaderCell>Date Type</HeaderCell>
                        <HeaderCell>Status</HeaderCell>
                        <HeaderCell>Access Doc</HeaderCell>
                        <HeaderCell>Access Link</HeaderCell>
                    </Row>
                </Header>
                <Body>
                   {this.renderRowList()}
                </Body>
            </Table> : <h2></h2> }

            </div>
            

            

                    </div>
                    
                );
            }
    
}

export default CheckOutRequests;