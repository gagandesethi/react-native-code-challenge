import React from 'react'
import {View,Text,TextInput} from 'react-native'

import TextInputStyles from '../style/TextInputStyles'
export class CustomTextInput extends React.Component{
    render(){
        return <View >
    <Text style={TextInputStyles.headingText}>{this.props.title}</Text>
    <View style={TextInputStyles.container}>
            <TextInput style={TextInputStyles.textInput} {...this.props}></TextInput>
            </View>
        </View>
    }

}