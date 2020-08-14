import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
    height:hp('4%'),
    width:'90%',
    alignSelf:'center',
    justifyContent:'center',
    borderColor:'gray',
    borderWidth:1,
    borderRadius:4,

      
    },
    desContainer:{
        height:hp('15%'),
        width:'90%',
        alignSelf:'center',
        paddingTop:10,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:4,
    
          
        },
    textInput:{
        width:'90%',
        alignSelf:'center',
        color:'gray',
        fontSize:12,
        
    },
    
    headingText:{
        alignSelf:'center',
        width:'90%',
        color:'black',
        fontSize:13,
        fontWeight:'500',
        marginVertical:7,
    }
})