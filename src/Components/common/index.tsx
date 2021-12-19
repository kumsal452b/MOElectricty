import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

interface IState{

}
interface IProps{
    children:JSX.Element,
    style:any
}
export class Container extends Component<IProps,IState> {
    constructor(prop:IProps){
        super(prop);
    }

  render() {
    return (
      <ScrollView>
        <View style={[this.props.style,styles.wrapper]}>
          {this.props.children}
        </View>
      </ScrollView>
    );
  }
}

export default Container;
