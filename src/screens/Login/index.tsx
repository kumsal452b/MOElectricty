import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Container from '../../Components/common';
import CustomButton from '../../Components/CustomButton/CustomInputs/CustomButton';
import Input from '../../Components/CustomInputs/input';
import Icon from 'react-native-vector-icons/AntDesign';
export default class Login extends Component {

  private userInputChange = '';
  public userInput
  onTextChangeUsername(e: any) {
    this.userInputChange = e;
    console.log(e);
  }
  onTextChangePassword(e: any) {
    this.userInputChange = e;
    console.log(e);
  }
  styles = StyleSheet.create({
    container: {
      padding: 5,
      fontSize: 14,
  
    },
  });

  child = () => {
    return (
      <View>
        <Input
          placeHolderText="Username"
          label={undefined}
          onTextChange={this.onTextChangeUsername.bind(this)}
          style={this.styles.container}
          value={this.userInputChange}
          icon={<Icon name={"eyeo"} size={25}/>}
          iconPosition="Right"
          error='This field is required'
          showError={false}
        />
        <Input
          placeHolderText="Pasword"
          label={undefined}
          onTextChange={this.onTextChangePassword.bind(this)}
          style={this.styles.container}
          value={this.userInputChange}
          icon={<Text>Hide</Text>}
          iconPosition="Right"
          error='This field is required'
          showError={false}
        />
        <CustomButton primary={true} loading={true} title='Login'disabled={false}/>

      </View>
    );
  };
  render() {
    return <Container children={this.child()} style={{}}></Container>;
  }
}
