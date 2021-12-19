import React from "react"
import {View,Text, StyleSheet} from "react-native"
import Container from "../../Components/common";

export default class Contact extends React.Component{
    
    render(){
        const styles=StyleSheet.create({
            test1:{
                fontSize:20
            }
        });
        return (
            <Container style={styles.test1}>
                <Text>Contact</Text>
            </Container>
        );
    }   
}