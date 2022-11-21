import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     fondo:{
        flex:1,
        backgroundColor:'black',
        paddingHorizontal:20  
     },
     container:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end'
   },
     resultado: {
      color:'white',
      fontSize:60,
      textAlign:'right',
      marginBottom:8
     },
     resultadoPequeno:{
      color:'rgba(255,255,255,0.5)',
      fontSize:30,
      textAlign:'right'
     },
     fila:{
      flexDirection:'row',
      justifyContent:'center',
      marginBottom:18, 
     },
     boton:{
        height:80,
        width:80,
        justifyContent:'center',
        backgroundColor:'#2D2D2D',
        borderRadius:100,
        marginHorizontal:5

     },
     botontexto:{
      textAlign:'center',
      fontSize:30,
      color:'white',
      fontWeight:'bold',
      
     }
});