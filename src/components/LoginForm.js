import React, { Component } from "react";
import { Text } from "react-native";
import firebase from "firebase";
import { Card, CardSection, Button, Input, Spinner } from "./common";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password) //busca el correo y si existe intenta loguearse si la pass esta ok
      .then(this.onloginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password) //si no existe el mail crea una cuenta
          .then(this.onloginSuccess.bind(this))
          .catch(this.onLoginFaild.bind(this));
      });
  }

  onLoginFaild() {
    this.setState({
      email: "",
      password:"",
      error: "Authentication Failed.!!!",
      loading: false
    });
  }

  onloginSuccess() {
    this.setState({
      email: "",
      password: "",
      loading: false,
      error: ""
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyles}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyles: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};
export default LoginForm;
