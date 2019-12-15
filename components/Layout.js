import React,{Component} from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';

class Layout extends Component {

    localStorage = { user : ''};
    constructor(props){
        super(props);
        if(this.state=== undefined){
            this.state = { user : 'NA'}
        }
    }

    componentDidUpdate(newProps){
        const { user } = this.props;
        if(newProps.user !== user && this.state.user === 'NA'){
            this.setState({ user : this.props.user});
            
        }
    }

    render(){
        // const childrenWithProps = React.Children.map(this.props.children, child =>
        //     React.cloneElement(child, { doSomething: this.state.user })
        //   );
        //console.log("PROPS.CHILDREN :");
        //console.log(typeof this.props.children);
        //console.log(React.isValidElement(this.props.children[1]));
        
        let arrChild;
        if(this.props.children[0] == undefined){
            arrChild = this.props.children.slice(1); 
        }else{
            arrChild = this.props.children;
        }
        
        
        const childrenWithProps = React.Children.map(arrChild, child =>
            React.cloneElement(child, { utoken: "btbt" })
          );
        return(
            <Container>
    {/* <h2>USER : {this.state.user}</h2> */}
                <Head>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Head>
                <Header />
                {this.props.children}
        </Container>
    )
    }


}

export default Layout;


// export default (props) => {
//     return(
//         <Container>
//             <Head>
//             <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            

//             </Head>
//         <Header />
//         {props.children}
        
//         </Container>
//     )
// }