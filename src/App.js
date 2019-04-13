import React, { Component } from 'react';
import { Text, View }  from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm  from './components/LoginForm';


class App extends Component{
    componentWillMount(){
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyDvEdBJGLYS5L_WkE-xGC_VFz8mjYLSKjE',
                authDomain: 'auth-react-native-eb4d5.firebaseapp.com',
                databaseURL: 'https://auth-react-native-eb4d5.firebaseio.com',
                projectId: 'auth-react-native-eb4d5',
                storageBucket: 'auth-react-native-eb4d5.appspot.com',
                messagingSenderId: '365960911003'
              }
        )
    }

    render(){
        return(
            <View>
                <Header headerText="Autenticacion"/>
                <LoginForm />
            </View>
        );
    };
};
export default App;