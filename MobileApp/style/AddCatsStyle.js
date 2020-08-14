import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
    height:'100%',
    width:'100%',
      
    },
    addButton:{
        marginTop:hp('2%'),
     height:hp('5%'),
     width:'90%',
     backgroundColor:'blue',
     borderRadius:4, 
     justifyContent:'center',
     alignSelf:'center',
     alignItems:'center'  
    },
    addButtonText:{
        color:'white',
        fontSize:16,
      
        fontWeight:'700',
    },
    genderButton:{
        width:'90%',
        alignSelf:'center'
    }
})