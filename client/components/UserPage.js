import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as firebase from 'firebase';
import{ Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';

 export default class UserPage extends Component{
  constructor(props){
    super(props)
    this.state ={
      name: this.props.navigation.state.params.user.displayName,
      profilePicture: this.props.navigation.state.params.user.photoURL
    }

  }

  render(){
    return(

     <View style={styles.profileContainer}>
     <Text>{this.state.name}</Text>
      <Image
          style={styles.pictureContainer}
          source={{uri: this.state.profilePicture}}
        />
     </View>
      )
  }
}

const styles = StyleSheet.create({
  profileContainer:{
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  pictureContainer:{
    borderRadius: 6,
    width: 100,
    height: 100
  }

})
