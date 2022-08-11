import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex:1,
     
      },
    header: {
      flex: 1,
      height:'100%',      
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    head: {   
      marginTop: 35, 
      width:'100%',  
      padding: 12,
      fontSize: 20,
      backgroundColor: 'blue',
      fontWeight:'bold',
      textAlign:"center",
      color: 'white'
    },
    bolder: {
      fontWeight:'bold',
      marginLeft:'30%',
      color:'black',
      fontSize: 20,
      letterSpacing:1,
      marginRight:10
    },
    body: {
      backgroundColor: 'blue',
      color: 'black',
      margin: 20,
      padding: 10
    },
    text:{
      margin:10,
      padding:10
    },
    input:{
      borderWidth: 1,
      borderColor: 'black',
      padding: 8,
      height: 45,
      marginTop: 15,
      marginBottom: 15
    },
    form:{
      margin: 35
    },
    list:{
        display: 'flex',
        padding: 20,
        borderWidth: 2,
        backgroundColor: 'gray',
        fontSize: 20,
        margin: '2%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        paddingHorizontal:14,
        paddingVertical:12,
        borderRadius: 8,
        backgroundColor:'red'
    },
    btnText:{
      backgroundColor:'red',
      color:'white',
      textAlign:'center',
      fontSize: 17,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    content:{
      marginTop:25,
      marginBottom: 45,
      flex:1
    },
    todo:{
      flex:1,
      padding: 20,
      borderWidth: 2,
      backgroundColor: 'gray',
      fontSize: 20,
      margin: '2%',
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    task:{
      flex:1,
      fontWeight:'bold',
      color: 'white'
    },
    delText:{
      padding:10,
      color:'white',
      backgroundColor:'red'
    },
    rate:{
      flexDirection: 'row',
      justifyContent:'center',
      marginTop:16
    },
    modalToggle:{
      borderWidth:1,
      borderColor:'blue',
      padding:15,
      borderRadius:10,
      alignSelf:'center'
    },
    errorText:{
      marginVertical:5,
      color:'red',
      fontSize: 16,
      textAlign:'center'
    },
    im1:{
      marginTop:20,
      marginLeft:'40%'
    },
    headerBtn:{
      marginLeft:'28%'
    }

  });

export default styles;
