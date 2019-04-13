import React, {Component} from 'react';
import { Card,CardSection,Button,Input } from './common';

class LoginForm extends Component{
    state={email:'',password:''}
    render(){
        console.log(this.state.text);
        return(
                <Card>
                    <CardSection>
                    <Input 
                    placeholder="user@gmail.com"
                    label='Email'
                    value={this.state.text}
                    onChangeText={email => this.setState({email})}
                    />
                    </CardSection>
                    <CardSection>
                    <Input 
                    secureTextEntry
                    placeholder="password"
                    label='Password'
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    />
                    </CardSection>
                    <CardSection>
                        <Button>
                            Log in
                        </Button>
                    </CardSection>
                </Card>
        );
    };
}
export default LoginForm;