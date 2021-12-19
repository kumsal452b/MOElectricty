import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

type IProps={
  title:string,
  loading:boolean,
  disabled:boolean,
  primary?:boolean,
  danger?:boolean,
  secondry?:boolean 
  
}
interface IState {
  isFoccused: boolean;
}
export default class CustomButton extends Component<IProps, IState>{
  constructor(prop: IProps) {
    super(prop);
    this.state = {
      isFoccused: false,
    };
  }

  getBgColor(){
    if(this.props.secondry){
      return "#31b554"
    }
    else if(this.props.primary){
      return "#31b554"
    }
    else if(this.props.danger){
      return "#e02b6d"
    }
  }
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        style={[styles.wrapper,{backgroundColor:this.getBgColor()}]}
        
      >
          <Text style={{color:this.props.disabled?"grey":"black"}}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
