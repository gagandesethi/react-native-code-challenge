import React from 'react';
import { Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native';
import { CustomHeader } from '../components/Header';
import { addCatsString, ADD_CAT } from '../commons/Strings';
import HomeStyle from '../style/HomeStyle';
import { CustomTextInput } from '../components/CustomTextInput';
import TextInputStyles from '../style/TextInputStyles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddCatsStyle from '../style/AddCatsStyle';
import { connect } from 'react-redux';
import * as action from '../actions/AddCat'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import AsyncStorage from '@react-native-community/async-storage';
class AddCats extends React.Component {
    constructor() {
        super()
        this.state = {
            gender: '',
            name: '',
            breed: '',
            desc: '',
        }
    }
    //Function for selecting gender
    onSelect = (index, value) => {
        this.setState({
            index: index, value: value, gender: value
        })
    }
    //function for addingCats Using Redux 
    addCat = async () => {
        const { addCat } = this.props
        let data


        if (this.state.name == '' || this.state.name == undefined) {
            alert('Please Enter Name')
        } else if (this.state.breed == '' || this.state.breed == undefined) {
            alert('Please Enter Breed')
        }
        else if (this.state.gender == '' || this.state.gender == undefined) {
            alert('Please Select Gender')
        }
        else if (this.state.desc == '' || this.state.desc == undefined) {
            alert('Please Enter Description')
        } else {
            try {


                const val = await AsyncStorage.getItem(ADD_CAT)
                let value
                if (val !== null) {
                    value = JSON.parse(val)
                    value.push({ name: this.state.name, breed: this.state.breed, gender: this.state.gender, desc: this.state.desc })
                    data = { key: ADD_CAT, object: JSON.stringify(value) }
                } else {
                    data = { key: ADD_CAT, object: JSON.stringify([]) }
                }
            } catch (error) {
                alert(error)
            }
            addCat(data).then((res) => {
                alert('Data saved Successfully')
            });
        }
    }
    
    render() {
        return <View style={HomeStyle.container}>

            <StatusBar barStyle="light-content"></StatusBar>
            <SafeAreaView style={HomeStyle.safeAreaStyles} ></SafeAreaView>
            {CustomHeader(addCatsString)}
            <CustomTextInput onChangeText={(text) => this.setState({ name: text })} placeholder={'Tom...'} title={'Cat Name'}></CustomTextInput>
            <CustomTextInput onChangeText={(text) => this.setState({ breed: text })} placeholder={'Breed...'} title={'Breed'}></CustomTextInput>
            <Text style={TextInputStyles.headingText}>Gender</Text>
            <View style={AddCatsStyle.genderButton}>
                <RadioGroup
                    onSelect={(index, value) => this.onSelect(index, value)}
                >
                    <RadioButton value={'Male'} >
                        <Text>Male</Text>
                    </RadioButton>

                    <RadioButton value={'Female'}>
                        <Text>Female</Text>
                    </RadioButton>


                </RadioGroup>
            </View>
            <Text style={TextInputStyles.headingText}>Description</Text>
            <View style={TextInputStyles.desContainer}>
                <TextInput onChangeText={(text) => this.setState({ desc: text })} placeholder={'Description...'} style={TextInputStyles.textInput} ></TextInput>
            </View>
            <TouchableOpacity onPress={() => this.addCat()} style={AddCatsStyle.addButton}>
                <Text style={AddCatsStyle.addButtonText}>Add</Text>
            </TouchableOpacity>
        </View>
    }
}
const mapDispatchToProps = dispatch => ({
    addCat: (data) => dispatch(action.saveCats(data))
})
export default connect(null, mapDispatchToProps)(AddCats)