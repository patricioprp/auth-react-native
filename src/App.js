import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner, CardSection } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    loggeIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDvEdBJGLYS5L_WkE-xGC_VFz8mjYLSKjE",
      authDomain: "auth-react-native-eb4d5.firebaseapp.com",
      databaseURL: "https://auth-react-native-eb4d5.firebaseio.com",
      projectId: "auth-react-native-eb4d5",
      storageBucket: "auth-react-native-eb4d5.appspot.com",
      messagingSenderId: "365960911003"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggeIn: true });
      } else {
        this.setState({ loggeIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggeIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Salir</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Autenticacion" />
        {this.renderContent()}
      </View>
    );
  }
}
export default App;
