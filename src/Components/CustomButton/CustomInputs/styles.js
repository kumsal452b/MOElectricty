import { StyleSheet } from "react-native";

export default styles=StyleSheet.create({
    wrapper:{
        alignItems:"center",
        width:"100%",
        borderWidth:1,
        padding:2,
        marginBottom:10,
        marginTop:20,
        height:42,
        justifyContent:"center",
        borderRadius:5,
       borderWidth:0,
       fontFamily:"Rubik-Italic-VariableFont_wght"
    },
    container:{
       flex:1,
    },
    textError:{
        color:"red"
    }
})