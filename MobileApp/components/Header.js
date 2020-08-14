import React from 'react';
import { Text, View, StatusBar,SafeAreaView } from 'react-native';
import HeaderStyles from '../style/HeaderStyles';

export const CustomHeader=(title)=>{
  return  <View style={HeaderStyles.container}>
<Text style={HeaderStyles.headerText}>{title}</Text>
    </View>

}