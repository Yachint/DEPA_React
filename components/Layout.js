import React,{Component} from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';

class Layout extends Component {
    constructor(props){
        super(props);
        this.state = { user : props.user}
    }

    
    render(){
        // const childrenWithProps = React.Children.map(this.props.children, child =>
        //     React.cloneElement(child, { doSomething: this.state.user })
        //   );
        console.log("PROPS.CHILDREN :");
        console.log(React.isValidElement(this.props.children))
        console.log(React.Children.countChildren);
        
        // const childrenWithProps = React.Children.filter(child => child!== null).map(this.props.children, child =>
        //     React.cloneElement(child, { userName: this.state.user })
        //   );
        return(
            <Container>
                <Head>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Head>
                <Header user={this.state.user} />
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