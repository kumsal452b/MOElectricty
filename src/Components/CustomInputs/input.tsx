import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';

interface IProps {
  label: any;
  onTextChange: (e: any) => void;
  style: any;
  placeHolderText: string;
  value: any;
  icon: any;
  iconPosition: string;
  error: string;
  showError: boolean;
  
}
interface IState {
  isFoccused: boolean;
}
export default class Input extends Component<IProps, IState> {
  constructor(prop: IProps) {
    super(prop);
    this.state = {
      isFoccused: false,
    };
  }
  getFlexDirection() {
    if (this.props.icon && this.props.iconPosition) {
      if (this.props.iconPosition.toLowerCase() === 'left') {
        return 'row';
      } else if (this.props.iconPosition.toLowerCase() === 'right') {
        return 'row-reverse';
      }
    }
  }
  getBorderColor() {
    if (this.state.isFoccused) {
      return 'blue';
    }
    if (this.props.error && this.props.showError) {
      return 'red';
    } else {
      return 'gray';
    }
  }
  render() {
    return (
      <View>
        <View
          style={[
            styles.wrapper,
            {
              flexDirection: this.getFlexDirection(),
              borderColor: this.getBorderColor(),
            },
          ]}>
          {this.props.icon}
          <TextInput
            placeholder={this.props.placeHolderText}
            onChangeText={this.props.onTextChange.bind(this)}
            style={[styles.container, this.props.style]}
            value={this.props.value}
            onBlur={() => {
              this.setState({isFoccused: false});
            }}
            onFocus={() => {
              this.setState({isFoccused: true});
            }}
          />
        </View>
        {this.props.error &&
          (this.props.showError ? (
            <Text style={[styles.textError, {}]}>{this.props.error}</Text>
          ) : null)}
      </View>
    );
  }
}
