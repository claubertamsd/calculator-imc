import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
     formContext:{
         width:"100%",
         height:"100%",
         bottom: 0,
         backgroundColor:"#ffffff",
         alignItems: "center",
         borderTopLeftRadius:30,
         borderTopRightRadius:30,
         marginTop:15,
     },
     
     form:{
         width:"100%",
         height:"auto",
         marginTop: 30,
         padding:10,
     },

    formLabel:{
      color:"#706E65",
      fontSize:16,
      paddingLeft: 22,
    },

    input:{
       width:"90%",
       borderRadius:10,
       height:50,
       margin:12,
       paddingLeft:10,
       backgroundColor:"#f6f6f6"
    },
    button:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop:12,
        paddingBottom:14,

        marginLeft:12,
        margin:20,
    }, 

    textButtonCalculator:{
       fontSize:18,
       color: "#FFFFFF"
    },

    errorMessage:{
      fontSize:12,
      color: "red",
      fontWeight:"bold",
      paddingLeft:22,
    }

  });

export default styles