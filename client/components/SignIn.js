import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import{ Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';

 // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBSvbGuE3x1loSM1a1NUCT3yU6JDbRxako",
    authDomain: "p4react-e6bbe.firebaseapp.com",
    databaseURL: "https://p4react-e6bbe.firebaseio.com",
    projectId: "p4react-e6bbe",
    storageBucket: "",
    messagingSenderId: "975827970259"
  };
  firebase.initializeApp(config);



export default class SignIn extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      loading: false
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) =>{
      if(user != null){
        // console.log(user)
      }
    })
  }

   signUpUser = (email, password) => {

    try {

      if (this.state.password.length < 6) {
        alert("Please enter atleast 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {

    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)
      })
    }
    catch (error) {
      console.log(error.toString())
    }
  }


async logInWithFacebook(){
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('268122073732315', { permissions: ['public_profile'] })

    if(type == 'success'){
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      firebase.auth().signInAndRetrieveDataWithCredential(credential).then((currentUser) => {
         this.props.navigation.navigate('UserPage', currentUser)
      }).catch((error) =>{
      console.log(error)
    })
  }
}

  render() {

    return (
      <Container style={styles.container}>
        <Form>
          {/* Email Input*/}
          <Item floatingLabel>
          <Label> Email </Label>
          <Input
          onChangeText={(email) => this.setState({ email: email })}
          autoCorrect={false}
          autoCapitalize = 'none'
          />
          </Item>

         {/* Password Input*/}
          <Item floatingLabel>
          <Label> Password </Label>
          <Input
          autoCorrect={false}
          autoCapitalize = 'none'
          secureTextEntry ={true}
          onChangeText={(password) => this.setState({ password: password })}
          />
          </Item>

          {/*Log-In Button*/}
          <Button style={{marginTop:10}}
          full
          rounded
          onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
          <Text> Login</Text>
          </Button>

          {/*Sign-Up Button*/}
          <Button style={{marginTop:10}}
          full
          success
          rounded
           onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
          <Text> Sign Up</Text>

          {/*Sign-up with facebook button*/}
          </Button>
          <Button style={{marginTop:10}}
          full
          rounded
          onPress ={() => this.logInWithFacebook()}
          >
          <Text> Login-In With Facebook</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
